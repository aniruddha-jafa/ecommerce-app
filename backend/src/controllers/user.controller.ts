import assert from 'assert'
import pino from 'pino'
import pinoHttp from 'pino-http'
import isUUID from 'is-uuid'
import { Prisma } from '@prisma/client'

import prismaClient from '../models/prismaClientInstance'
import auth from '../lib/auth/index'
import { UserCreateSchema, UserUpdateSchema } from '../models/schemas/user.api'

import type { User } from '@prisma/client'
import type { RequestHandler, Request, Response, NextFunction } from 'express'

// ----------------------------------------------------------------

const log = pino({ name: 'user.controller' })
const httpLog = pinoHttp({ name: 'user.controler.http' }).logger

interface RequestWithId extends Request {
  userId?: User['id']
}

const db = prismaClient.user

const list: RequestHandler = async (req, res) => {
  try {
    log.info('Trying to list many users..')

    const users = await db.findMany({
      where: {
        status: 'ACTIVE',
      },
      select: {
        id: true,
        name: true,
        email: true,
        updatedAt: true,
      },
    })
    res.json(users)

    log.info('Success')
  } catch (err: any) {
    log.error(err?.message)
    httpLog.error(req)

    res.status(500).json({
      error: 'Unable to retrieve users',
    })
  }
}

/**
 * Handler for route param :userId
 *
 * performs basic validation,
 * then sets req.userId = id
 */
const userIdValidator = async (
  req: Request,
  res: Response,
  next: NextFunction,
  id: string
) => {
  try {
    assert(id, 'id is required')
    assert(typeof id === 'string')
    assert(isUUID.anyNonNil(id), 'id must be a valid uuid')
    ;(req as RequestWithId).userId = id

    log.info('Success')
    next()
  } catch (err: any) {
    log.error(err?.message)
    httpLog.error(req)

    next(new Error(err?.message || 'Invalid user id'))
  }
}

// create
const create: RequestHandler = async (req, res) => {
  try {
    log.info('Trying to create a user')

    const { body } = req
    log.info('Request body is: %o', body)

    const result = await UserCreateSchema.safeParseAsync(body)

    if (!result.success) {
      log.error('Unable to parse as user: %o', result.error)
      const { path, message } = result.error.issues[0]
      throw new Error(`${path} - ${message}`)
    }

    const data = { ...body }
    const { password } = body
    data.hashedPassword = await auth.createHashedPassword(password)
    log.debug('generated hashedPassword: %s', data.hashedPassword)

    /** password should NOT be persisted! */
    delete data['password']

    await db.create({ data })

    res.status(200).json({ message: 'User created successfully' })
    log.info('Success')
  } catch (err: any) {
    log.error('Error: %o', err)

    let message = err?.message || 'Unable to create user'
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      const { code } = err
      if (code === 'P2002') {
        message = 'Email is already in use'
      }
    }

    res.status(500).json({ error: message })
  }
}

const read = async (req: RequestWithId, res: Response) => {
  try {
    const id = req.userId
    log.info('Trying to read user ' + id)

    const user = await db.findUnique({
      where: {
        id,
      },
      select: {
        name: true,
        email: true,
        updatedAt: true,
      },
    })
    res.json(user)

    log.info('success')
  } catch (err: any) {
    log.error(err?.message)
    httpLog.error(req)

    res.status(500).json({
      error: 'Unable to read user',
    })
  }
}

const update = async (req: RequestWithId, res: Response) => {
  try {
    const { userId, body } = req
    log.info('Trying to update user ' + userId)
    log.info('data: %o', body)

    const data = { ...body, id: userId }

    const result = await UserUpdateSchema.safeParseAsync(data)
    if (!result.success) {
      const { path, message } = result.error.issues[0]
      throw new Error(`${path} - ${message}`)
    }

    const user = await db.update({
      where: { id: userId },
      data,
      select: {
        id: true,
        email: true,
        name: true,
        updatedAt: true,
      },
    })

    res.json(user)

    log.info('Success')
  } catch (err: any) {
    log.error(err)
    httpLog.error(req)

    let message = err?.message || 'Unable to update user'

    res.status(500).json({ error: message })
  }
}

const remove = async (req: RequestWithId, res: Response) => {
  try {
    const id = req.userId
    log.info('Trying to delete user ' + id)

    const user = await db.delete({
      where: { id },
      select: {
        id: true,
        email: true,
        name: true,
        updatedAt: true,
      },
    })
    res.json(user)

    log.info('Success')
  } catch (err: any) {
    log.error(err?.message)
    httpLog.error(req)

    res.status(500).json({ error: 'Unable to delete user' })
  }
}

export default {
  create,
  userIdValidator,
  read,
  list,
  update,
  remove,
}
