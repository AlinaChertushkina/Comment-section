const button = document.querySelector('.button');

button.addEventListener('click', function () {
    const userName = document.querySelector('.user_name').value;
    const userNameToLowerCase = userName.toLowerCase();
    const UserNameModified = (userNameToLowerCase.charAt(0).toUpperCase() + userNameToLowerCase.slice(1)).trim();

    const chatField = document.getElementById('chat_field');
    chatField.innerHTML = UserNameModified;

    const profilePicLink = document.querySelector('.link').value;
    const profilePic = document.getElementById('profile_pic');

    let imageElement = document.createElement("img");
    imageElement.src = profilePicLink;
    profilePic.innerHTML = "";
    profilePic.appendChild(imageElement);

    const comment = document.getElementById('comment').value;
    const commentToChat = document.getElementById('entered_comment');

    function checkSpam(str) {
        let spamDetection = /(viagra|XXX)/gi;
        return str.replace(spamDetection, '***');
    }

    let modifiedComment = checkSpam(comment);
    commentToChat.innerHTML = modifiedComment;

}) 