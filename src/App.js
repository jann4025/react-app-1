import React, { useState } from 'react';
import './App.css';
function Header(props) {
	return (
		<header>
			<p>Header</p>
			<Profile name={props.name} />
		</header>
	);
}

function Profile(props) {
	return (
		<div className="profile">
			<p>Hello, {props.name}</p>
		</div>
	);
}

function Feed(props) {
	return (
		<div className="feed">
			<p>Feed</p>
			<AddPostForm />
			{props.posts}
		</div>
	);
}

function AddPostForm() {
	return (
		<form>
			<p>Add post form</p>
		</form>
	);
}

function Post() {
	const [ count, setCount ] = useState(0);
	const updateCount = () => {
		setCount(count + 1);
	};

	return (
		<div className="post">
			<p>Post</p>
			<p>This post have {count} likes</p>
			<button onClick={updateCount}>Like</button>
			<AddCommentForm />
			<Comment />
			<Comment />
		</div>
	);
}

function AddCommentForm() {
	return (
		<form>
			<p>Add Comment Form</p>
		</form>
	);
}

function Comment() {
	return (
		<div className="comment">
			<p>Comment</p>
		</div>
	);
}

function Footer(props) {
	return (
		<footer>
			<p>{props.name}</p>
		</footer>
	);
}

function App() {
	const name = 'Jannick'; //Pass to profile and footer
	const post = [ <Post />, <Post />, <Post /> ]; //Pass to feed

	return (
		<div className="App">
			<Header name={name} />
			<Feed posts={post} />
			<Footer name={name} />
		</div>
	);
}

export default App;
