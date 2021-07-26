import { Redirect, Route, Switch } from "react-router-dom";
import DogDetails from "./DogDetails";
import DogList from "./DogList";

const Routes = ({dogs}) => {
    const getDogByName = (name) => {
        return dogs.find(dog => dog.name === name);
    }

    return (
        <Switch>
            <Route exact path="/dogs">
                <DogList dogs={dogs}/>
            </Route>
            <Route path="/dogs/:name">
                <DogDetails getDogByName={getDogByName}/>
            </Route>
            <Redirect to="/dogs" />
        </Switch>
    );
};

export default Routes;