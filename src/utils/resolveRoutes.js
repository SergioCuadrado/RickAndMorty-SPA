const resolveRoutes = (route) => {
    // Comprueba si es un id con el length menor a tres ya que no hay mas de 1000 personajes
    if(route.length <= 3) {
        let validRoute = route === '/' ? route : '/:id';
        return validRoute;
    }
    return `/${route}`; // /about
};

export default resolveRoutes;