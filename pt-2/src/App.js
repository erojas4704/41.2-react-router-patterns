import './App.css';
import { Link, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NewColorForm from './NewColorForm';
import { v4 as uuid } from "uuid";
import Color from './Color';

function App() {
  const [colors, setColors] = useState(['red', 'green', 'blue']);
  useEffect(() => {
    if (window.localStorage.getItem('colors'))
      setColors(window.localStorage.getItem('colors').split(","));
  }, []);
  useEffect(() => {
    window.localStorage.setItem('colors', colors.join(','));
  }, [colors]);

  const addNewColor = color => {
    setColors(colors => {
      return [color, ...colors];
    });
  }

  return (
    <div>
      <Switch>
        <Route exact path="/colors/new">
          <NewColorForm addNewColor={addNewColor} />
        </Route>
        <Route exact path="/colors">
          <nav className="navbar">
            {colors.map(color => (
              <NavLink className="navlink" to={`/colors/${color}`} key={uuid()}>
                <div className="color-box" style={{ backgroundColor: color }}></div>
                {color}
              </NavLink>
            ))}
          </nav>
          <Link to="/colors/new">New Color</Link>
        </Route>
        <Route path="/colors/:color">
          <Link to="/colors">Take Me Back</Link>
          <Color colors={colors}/>
        </Route>
        {colors.map(color => (
          <Route key={`route-${color}`} path={`/colors/${color}`}>
          </Route>)
        )}
        <Redirect to="/colors" />
      </Switch>
    </div>
  );
}

export default App;
