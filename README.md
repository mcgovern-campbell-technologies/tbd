# luber

##Install dependencies
```
yarn install
```

##Start me up
This uses react-scripts. It will run on http://localhost:3000
```
npm start
```


##Alternatively, use "docker-compose"
If you have docker installed, you can just run the following command:
```
docker-compose up -d
```

If you want to be able to see the logs as you work, just leave off the -d:

```
docker-compose up
```

At this early stage of development, it's probably not necessary to use docker to get up and running, but as we add more services (database, workers, proxy / load balancer), using docker-compose will hopefully make this a little easier. This will also run at http://localhost:3000

When you use `docker-compose up -d`, the services listed in the docker-compose.yml will run, firing up docker containers. These will continue to run in the background until you stop them using this command:

```
docker-compose stop
```

You can also use `docker-compose down` which will stop the containers and then also remove (delete) them. This shouldn't be a concern though, since we will be keeping our containers stateless.
