"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateNote() {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const router = useRouter();

	const create = async (e: any) => {
		e.preventDefault();
		await fetch(`http://127.0.0.1:8090/api/collections/notes/records`, {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({
				title,
				content,
			}),
		});
		setTitle("");
		setContent("");

		router.refresh();
	};
	return (
		<form onSubmit={create}>
			<h3>Create new Note</h3>
			<input
				type="text"
				placeholder="title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<textarea
				placeholder="Content"
				value={content}
				onChange={(e) => setContent(e.target.value)}
				cols={30}
				rows={10}
			/>
			<button type="submit">create Note </button>
		</form>
	);
}
