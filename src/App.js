import { React, useRef } from 'react';
import image from './assets/profile__img.png'
import zuriLogo from './assets/zuriLogo.svg'
import i4g from './assets/I4g.svg'
import slack from './assets/slack.svg'
import gitlogo from './assets/gitlogo.svg'
import './App.css';

function Button(props) {
  return <a className='btn' href={props.link} id={props.id} title={props.title} ref={props.ref_id} type='button'>{props.text}</a>
}

function Profile(props) {
  const displaySlack = props.displaySlack
  return (
    <div className='Profile'>
      <img src={image} id='profile_img' alt='Profile' />
      <h2 id='name'>Ojurongbe Adejuwon</h2>
      <div className='usernames'>
        {displaySlack === true &&
          <span id='slack'><b>Slack: </b>Adejuwon</span>
        }
      </div>
    </div>
  );
};



function Links() {
  const refValue = useRef("Ojurongbe Adejuwon")
  return (
    <div className='Links'>
      <Button link='https://twitter.com/adejuwonsAlley' id='twitter' text='Twitter Link' />
      <Button link='https://training.zuri.team/' id='btn__zuri' text='Zuri team' />
      <Button link='http://books.zuri.team' id='books' title='
We have amazing books on design and coding that will enhance your learning.' text='Zuri design and coding books' />
      <Button link='https://books.zuri.team/python-for-beginners' id='book__python' ref_id={refValue} text='Purchase the best-selling Python books' />
      <Button link='https://background.zuri.team' id='pitch' text='Do you want a coder background check? Zuri is all you need.' />
      <Button link='https://books.zuri.team/design-rules' id='book__design' text='Get free design books' />
      <div className='links_footer'>
        <a className='social_link' href='https://app.slack.com/client/T042F7V19Q8/C041JU70S5U/rimeto_profile/U048PSXGXUH'><img src={slack} alt='slack' /></a>
        <a className='social_link' href='https://github.com/Adejuwon-00'><img src={gitlogo} alt='gitlogo' /></a>
      </div>
    </div>
  );
};


function Footer() {
  return (
    <div className='Footer'>
      <a href='https://internship.zuri.team/'><img src={zuriLogo} alt='Zuri Internship' /></a>
      <p>HNG Internship 9 Frontend Task</p>
      <a href='https://ingressive.org/'><img src={i4g} alt='I4G' /></a>
    </div>
  );
};

function App() {
  return (
    <div>
      <Profile />
      <Links />
      <Footer />
    </div>
  );
};


export default App;