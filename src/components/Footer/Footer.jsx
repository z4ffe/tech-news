import React, {useRef} from 'react';
import {Form, Button} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {addUserToNewsLetter} from "../../store/thunks/thunkUsers";
import {ShowToast} from '../tools/toast'
import {clearNewsLetter} from "../../store/reducers/users";
import logo from '../../image/logo.svg'

const Footer = () => {
   const textInput = useRef()
   const dispatch = useDispatch()

   const handleSubmit = (e) => {
	  e.preventDefault()
	  const value = textInput.current.value
	  if (!value) {
		 console.log(value)
		 dispatch(addUserToNewsLetter({email: value}))
		 .unwrap()
		 .then(res => {
			if (res.newsletter === 'added') {
			   ShowToast('success', 'You are subscribed for newsletter')
			} else {
			   ShowToast('error', 'This email already exist')
			}
		 })}
	  textInput.current.value = null
	  dispatch(clearNewsLetter())
   }

   return (
	  <div className="footer-wrapper">
		 <div className="newsletter_container">
			<h2>Join our news letter</h2>
			<div className="form">
			   <Form onSubmit={handleSubmit} className="">
				  <Form.Group>
					 <Form.Control className="newsletter-input" type="email"
								   placeholder="type you e-mail here..."
								   name="main"
								   ref={textInput}></Form.Control>
				  </Form.Group>
				  <Button variant="outline-light" type="submit" className="newsletter-button">Stay tuned</Button>
			   </Form>
			</div>
		 </div>
		 <div className="footer-copyright">
			<p><span>©2022</span> TECH NEWS</p>
			<p>Handcrafted by Paul Lightman</p>
		 </div>
		 <div className="footer-socials">
			<ul className="socials-list">
			   <li><a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram fa-xl"></i></a></li>
			   <li><a href="https://www.twitter.com/" target="_blank"><i className="fa-brands fa-twitter fa-xl"></i></a></li>
			   <li><a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook fa-xl"></i></a></li>
			   <li><a href="https://www.tiktok.com/" target="_blank"><i className="fa-brands fa-tiktok fa-xl"></i></a></li>
			</ul>
		 </div>
	  </div>
   );
};

export default Footer;
