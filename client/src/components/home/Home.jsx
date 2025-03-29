import { Link } from "react-router";

export default function Home() {
    return (
        <div className="home-page">
            <div className="content">
                <h1>Welcome to BookHive!</h1>
                <h3>Your ultimate platform for discovering and sharing books!</h3>
                <p>
                    Whether you're looking to discover your next favorite read or share your literary thoughts, BookHive is the
                    place to be.
                    Explore new books, engage with the community by leaving reviews, commenting on posts, and expressing your
                    appreciation with likes.
                    Join us today and be part of a growing network of book lovers who share their passion for reading!
                </p>
                <Link to="/books" className="btn">Catalog</Link>
            </div>
        </div>

    );
}