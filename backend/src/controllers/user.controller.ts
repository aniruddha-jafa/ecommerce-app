import assert from 'assert'
import { PrismaClient } from '@prisma/client'
import pino from 'pino'
import pinoHttp from 'pino-http'

import type { User } from '@prisma/client'
import type { RequestHandler, Request, Response, NextFunction } from 'express'

// ----------------------------------------------------------------

const log = pino({ name: 'user.controller' })
const httpLog = pinoHttp({ name: 'user.controler.http' }).logger

interface RequestWithId extends Request {
  userId?: User['id']
}

const db = new PrismaClient()

const list: RequestHandler = async (req, res) => {
  try {
    log.info('Trying to list many users..')

    const users = await db.user.findMany({
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
    log.info('Trying to create user..')
    // log.debug('Request body is: %o', req.body)
    await db.user.create({ data: req.body })
    res.status(200).json({ message: 'User created successfully' })

    log.info('Success')
  } catch (err: any) {
    log.error(err?.message)
    httpLog.error(req.body)

    res.status(500).json({ error: 'Unable to create user' })
  }
}

const read = async (req: RequestWithId, res: Response) => {
  try {
    const id = req.userId
    log.info('Trying to read user ' + id)

    const user = await db.user.findUnique({
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
    const id = req.userId
    log.info('Trying to update user ' + req.userId)
    log.info('data: %o', req.body)
    const user = await db.user.update({
      where: { id },
      data: req.body,
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

    res.status(500).json({ error: 'Unable to update user' })
  }
}

const remove = async (req: RequestWithId, res: Response) => {
  try {
    const id = req.userId
    log.info('Trying to delete user ' + id)

    const user = await db.user.delete({
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
