import React, { useState, useEffect } from "react";
import { categories } from "../data";
import NewsItem from "./NewsItem";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const NewsThread = ({ category, news, setNews }) => {
  const [fileteredNews, setFilteredNews] = useState(news);
  const [categoryName, setCategoryName] = useState("All News");

  const [isVisible, setIsVisible] = useState(false);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [categoryId, setCategoryId] = useState(null);

  const handleClose = () => setIsVisible(false);

  const handleAdd = () => {
    if (title && content && image && categoryId) {
      const copy = news.slice();
      copy.push({
        id: Date.now(),
        title: title,
        content: content,
        category_id: categoryId,
        photo: image,
      });
      console.log(copy);
      setNews(copy);
    }
  };

  useEffect(() => {
    const temp = [];
    if (category === "all-news") {
      setFilteredNews(news);
      setCategoryName("All News");
      return;
    }
    for (let i = 0; i < news.length; ++i) {
      let categoryId = null;
      for (let j = 0; j < categories.length; ++j) {
        if (category === categories[j].url) {
          setCategoryName(categories[j].name);
          categoryId = categories[j].id;
        }
      }
      if (news[i].category_id === categoryId) {
        temp.push(news[i]);
      }
    }
    setFilteredNews(temp);
  }, [category, news]);

  return (
    <>
      {categoryName}
      {fileteredNews.map((newsItem) => (
        <NewsItem
          key={newsItem.id}
          id={newsItem.id}
          title={newsItem.title}
          content={newsItem.content}
          photo={newsItem.photo}
        ></NewsItem>
      ))}

      <Button onClick={() => setIsVisible(true)}>Add News</Button>

      <Modal show={isVisible} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add News</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formContent">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                type="text"
                placeholder="Enter content"
                value={content}
                onChange={(event) => setContent(event.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formImage">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image url"
                value={image}
                onChange={(event) => setImage(event.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                value={categoryId ? categoryId : undefined}
                onChange={(event) =>
                  setCategoryId(parseInt(event.target.value))
                }
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
