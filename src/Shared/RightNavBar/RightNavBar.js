import React from "react";
import { Button, ButtonGroup, ListGroup, ListGroupItem } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaTwitch,
  FaYoutube,
  FaWhatsapp,
  FaDiscord,
  FaExclamationCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

const RightNavBar = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button variant='outline-primary' className='mb-1'>
          <FaGoogle /> Login Via Google
        </Button>
        <Button variant='outline-dark'>
          <FaGithub /> Login Via Github
        </Button>
      </ButtonGroup>
      <div className='mt-4'>
        <h5>Find Us On</h5>
        <ListGroup>
          <ListGroupItem className='mb-2'>
            <FaFacebook /> Facebook
          </ListGroupItem>
          <ListGroupItem className='mb-2'>
            <FaTwitter /> Twitter
          </ListGroupItem>
          <ListGroupItem className='mb-2'>
            <FaYoutube /> YouTube
          </ListGroupItem>
          <ListGroupItem className='mb-2'>
            <FaWhatsapp /> Whatsapp
          </ListGroupItem>
          <ListGroupItem className='mb-2'>
            <FaTwitch /> Twitch
          </ListGroupItem>
          <ListGroupItem className='mb-2'>
            <FaDiscord /> Discord
          </ListGroupItem>
          <ListGroupItem className='mb-2'>
            <FaExclamationCircle /> Privacy Policy
          </ListGroupItem>
          <ListGroupItem className='mb-2'>
            <FaExclamationTriangle /> Terms & Conditions
          </ListGroupItem>
        </ListGroup>
      </div>
    </div>
  );
};

export default RightNavBar;
