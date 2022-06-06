FROM node:16
RUN npm install -g pnpm
WORKDIR /code 

ENV NODE_ENV=production
ENV CI=true 


# FROM base As builder
# see pnpm docs - https://pnpm.io/cli/fetch
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod
ADD . ./

# copy remaining files
# FROM builder AS copy
# COPY . ./

RUN pnpm run build

# FROM copy AS runner 
EXPOSE 5050
CMD ["pnpm", "run", "start"]