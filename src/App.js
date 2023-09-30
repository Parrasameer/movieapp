
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from "./Components/Movies/Home/Home"
import MovieDetails from './Components/Movies/MovieDetails/MovieDetails';
import SignIn from './Components/UserLogins/SignUp/SignIn/SignIn';
import SignUp from './Components/UserLogins/SignUp/SignUp';
import TicketPlan from './Components/Movies/Ticketplan/TicketPlan';
import SeatPlan from './Components/Booking/SeartPlan/SeatPlan';
import { Provider } from 'react-redux';
import { store } from './Store/Store';
import CheckOut from './Components/Movies/CheckOut/CheckOut';

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter><Routes>
          <Route path='/' element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />}>
          </Route>
          <Route path='/movie/:id/ticketPlan' element={<TicketPlan />}></Route>
          <Route path='/movie/:cinemaId/seatPlan' element={<SeatPlan />}></Route>
          <Route path='/signin' element={<SignIn />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/checkOut' element={<CheckOut />} ></Route>
        </Routes>
        </BrowserRouter>
      </Provider>
      {/* <Home /> */}
      {/* <SignUp /> */}

      {/* <SignIn /> */}
      {/* <MovieDetails /> */}
    </div>
  );
}

export default App;
