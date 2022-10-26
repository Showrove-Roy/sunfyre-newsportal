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
import BrandCarousel from "../BrandCarousel/BrandCarousel";

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
          <ListGroupItem className='mb-2' type='button'>
            <FaFacebook /> Facebook
          </ListGroupItem>
          <ListGroupItem className='mb-2' type='button'>
            <FaTwitter /> Twitter
          </ListGroupItem>
          <ListGroupItem className='mb-2' type='button'>
            <FaYoutube /> YouTube
          </ListGroupItem>
          <ListGroupItem className='mb-2' type='button'>
            <FaWhatsapp /> Whatsapp
          </ListGroupItem>
          <ListGroupItem className='mb-2' type='button'>
            <FaTwitch /> Twitch
          </ListGroupItem>
          <ListGroupItem className='mb-2' type='button'>
            <FaDiscord /> Discord
          </ListGroupItem>
          <ListGroupItem className='mb-2' type='button'>
            <FaExclamationCircle /> Privacy Policy
          </ListGroupItem>
          <ListGroupItem className='mb-2' type='button'>
            <FaExclamationTriangle /> Terms & Conditions
          </ListGroupItem>
        </ListGroup>
      </div>
      <div className='mt-3'>
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightNavBar;
