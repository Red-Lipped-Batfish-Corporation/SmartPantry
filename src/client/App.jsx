// import React from 'react';
// // import Button from './components/Button';
// // import Button2 from './components/Button2'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { RecipeCard } from './components/RecipeCard';
// import RecipeMainContainer from './containers/RecipeMainContainer'
// import PantryPage from './pages/PantryPage';
// import RecipesPage from './pages/RecipesPage';
// import WelcomePage from './pages/WelcomePage';
// import './red-lip.css';

//   const App = () => {
//       return (
//         <div>
//            {/* <Router>
//               <Routes>
//               <Route path="/" element={<WelcomePage />} />
//               <Route path='/pantry' 
//                 element = {<PantryPage/>} />
//               <Route path ='/recipes'
//                 element = {<RecipesPage/>}/>
//               </Routes>
//             <Recommd/>
//               <Button to="pantry"/>
//               <Button2 to="recipes"/>
//             </Router> */}
//                 {/* <Router>
//                 <Routes>
//                 <Route path="/" element={<WelcomePage />} />
//                 <Route path="/pantry" element={<PantryPage />} />
//                 <Route path="/recipes" element={<RecipesPage />} />
//               </Routes>
//               </Router> */}
//               {/* <RecipeMainContainer /> */}
//         </div>      

//     )
// }

// export default App;

import React from 'react';
// import Button from './components/Button';
// import Button2 from './components/Button2'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { RecipeCard } from './components/RecipeCard';
import PantryPage from './pages/PantryPage';
// import RecipesPage from './pages/RecipesPage';
import WelcomePage from './pages/WelcomePage';
import './red-lip.css';
import RecipeMainContainer from './containers/RecipeMainContainer';

const App = () => {
    return (
        <div>
            {/* <Router>
              <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path='/pantry' 
                element = {<PantryPage/>} />
              <Route path ='/recipes'
                element = {<RecipesPage/>}/>
              </Routes>
            <Recommd/>
              <Button to="pantry"/>
              <Button2 to="recipes"/>
            </Router> */}
            <Router>
                <Routes>
                    <Route path="/" element={<WelcomePage />} />
                    <Route path="/pantry" element={<PantryPage />} />
                    {/* <Route path="/recipes" element={<RecipesPage />} /> */}
                    <Route path="/recipes" element={<RecipeMainContainer />} />
                </Routes>
            </Router>
        </div>

    )
}

export default App;


/*
 * @Author: Christie Laferriere & Jing xiajing1103@gmail.com
 * @Date: 2024-04-28 5:40 pm
 * @Last Modified by: peter_gao@outlook.com
 * @Last Modified time: 2024-04-29 12:59:04
 */