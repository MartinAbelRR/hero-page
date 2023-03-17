import { Navigate, Route, Routes } from 'react-router';
import { NavBar } from '../../ui';
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages';


export const HeroesRoutes = () => {
  return (
    <>
        <NavBar />

        <div className='container'>
            <Routes>
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="dc" element={<DcPage />} />

                {/* Search, Hero by id */}
                <Route path='search' element={<SearchPage />}></Route>
                <Route path='hero/:id' element={<HeroPage />}></Route>

                <Route path="/" element={<Navigate to="/marvel"/>}/>
            </Routes>
        </div>

    </>
  )
}
