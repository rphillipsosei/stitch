CREATE DATABASE stitch;

CREATE TABLE products(
    products_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    description VARCHAR(255),
    price INT,
    rating INT
)