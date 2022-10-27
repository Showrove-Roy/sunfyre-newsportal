import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaEye, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { Image } from "react-bootstrap";

const NewsCard = ({ news }) => {
  console.log(news);
  const { _id, author, details, image_url, title, total_view } = news;
  return (
    <Card className='mb-5'>
      <Card.Header className='d-flex justify-content-between align-items-center'>
        <div className='d-flex'>
          <Image
            src={author.img}
            roundedCircle
            style={{ height: "60px" }}
            className='me-2'></Image>
          <div>
            <p className='m-1 fw-semibold'>{author.name}</p>
            <p className='m-1'>{author.published_date}</p>
          </div>
        </div>
        <div className=''>
          <FaRegBookmark className='mx-2' />
          <FaShareAlt />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant='top' src={image_url} />

        <Card.Text>
          {details.length > 200 ? (
            <p>
              {details.slice(0, 200) + "..."}
              <Link className='text-decoration-none' to={`/news/${_id}`}>
                More
              </Link>
            </p>
          ) : (
            <p>
              {details}{" "}
              <Link className='text-decoration-none' to={`/news/${_id}`}>
                More
              </Link>
            </p>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className='text-muted'>
        <FaEye /> {total_view}
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
