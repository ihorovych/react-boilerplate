This is boilerplate for React.
Basic config with ESLint AirBnb standart.
Configurated Redux, Saga and Router.

To run dev-server:
```
npm run dev
```

Include example for sagas, actions and reducers.

To Build Docker Image
```
sudo docker build -t react-app .
```
To Run Dcker container

sudo docker run --rm -it -p 3000:3000 -v $(pwd):/frontend react-app
