function todoList() {
	var username = document.getElementById("username").value
	var comment = document.getElementById("comment").value

	var userNameText = document.createTextNode("Name: " + username)
	var commentText = document.createTextNode("Comment: " + comment)

	var newListItem = document.createElement("LI")
	newListItem.className = "list-group-item"
	var newUserName = document.createElement("H5")
	newUserName.appendChild(userNameText)
	var newComment = document.createElement("P")
	newComment.appendChild(commentText)

	newListItem.appendChild(newUserName)
	newListItem.appendChild(newComment)
	document.getElementById("commentList").appendChild(newListItem)
}