import React, {useState} from 'react'
import FromSir from './from-sir'
import AlaBoker from './alaboker'
import Sweet from './sweet'
import Metugan from './metugan'
import Plancha from './plancha'
import Sandwiches from './sandwiches'
import AlaEsh from './alaesh'

const Menu = () => {
  const [menuCategory, setMenuCategory] = useState('fromsir');
  let SelectedCategory;
  if (menuCategory === 'fromsir') {
    SelectedCategory = FromSir;
  } else if (menuCategory === 'alaboker') {
    SelectedCategory = AlaBoker
  } else if (menuCategory === 'sweet') {
    SelectedCategory = Sweet
  } else if (menuCategory === 'metugan') {
    SelectedCategory = Metugan
  } else if (menuCategory === 'plancha') {
    SelectedCategory = Plancha
  } else if (menuCategory === 'sandwiches') {
    SelectedCategory = Sandwiches
  } else if (menuCategory === 'alaesh') {
    SelectedCategory = AlaEsh
  }

  return (
    <section className="menu">
      <h2>התפריט שלנו</h2>
      <ul className="menu-headers">
        <li className="menu-header" onClick={() => setMenuCategory('alaboker')}>עלאבוקר</li>
        <li className="menu-header" onClick={() => setMenuCategory('fromsir')}>ישר מהסיר</li>
        <li className="menu-header" onClick={() => setMenuCategory('metugan')} >מטוגן ופריך </li>
        <li className="menu-header" onClick={() => setMenuCategory('sandwiches')} >על הדרך</li>
        <li className="menu-header" onClick={() => setMenuCategory('alaesh')} >עלהאש</li>
        <li className="menu-header" onClick={() => setMenuCategory('sweet')} >מתוקים</li>
      </ul>
      <SelectedCategory />
    </section>
  )
}

export default Menu;