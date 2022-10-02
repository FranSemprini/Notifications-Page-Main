const chatsWall = document.querySelector(`#chats__wall`)
let notiNumber = document.querySelector(`#notification__number`)
const unMarkAll = document.querySelector(`#unMark__all`)
let unreadMessages = notifications.filter((element) => element.read === false)

notiNumber.innerHTML = unreadMessages.length

unMarkAll.addEventListener(`click`, () => {
    unreadMessages.forEach(element => {
       element.read = true
    })
    unreadMessages = notifications.filter((element) => element.read === false)
    notiNumber.innerHTML = unreadMessages.length
    chatsWall.innerHTML = ''
    readNotificarions()
})


const showReact = (noti) => {
    const inner = `<img src=${noti.avatar}><div><div class="bubble__text"><p><span class="name">${noti.name}</span> ${noti.activity} <span class="activity--reacted"> ${noti.to}</span>${!noti.read ? `<span class="red__dot"></span></p>` : '' }</div><div class="time">${noti.time}</div></div>`
    showNotification(noti, inner)
}

const showFollow = (noti) => {
    const inner = `<img src=${noti.avatar}><div><div class="bubble__text"><p><span class="name">${noti.name}</span> ${noti.activity} <span class="activity"></span>${!noti.read ? `<span class="red__dot"></span></p>` : '' }</div><div class="time">${noti.time}</div></div>`
    showNotification(noti, inner)
}

const showGroup = (noti) => {
    const inner = `<img src=${noti.avatar}><div><div class="bubble__text"><p><span class="name">${noti.name}</span> ${noti.activity} <span class="activity--joined"> ${noti.to}</span>${!noti.read ? `<span class="red__dot"></span></p>` : '' }</div><div class="time">${noti.time}</div></div>`
    showNotification(noti, inner)
}

const showMessage = (noti) => {
    const inner = `<img src=${noti.avatar}><div><div class="bubble__text"><p><span class="name">${noti.name}</span> ${noti.activity} <span class="activity--joined"></span>${!noti.read ? `<span class="red__dot"></span></p>` : '' }</div><div class="time">${noti.time}</div><div class="activity--message">${noti.to}</div></div>`
    showNotification(noti, inner)
}

const showPicture = (noti) => {
    const inner = `<img src=${noti.avatar}><div><div class="bubble__text"><p><span class="name">${noti.name}</span> ${noti.activity} <span class="activity--reacted"> </span>${!noti.read ? `<span class="red__dot"></span></p>` : '' }</div><div class="time">${noti.time}</div></div><img class="comment__picture" src="${noti.to}"/>`
    showNotification(noti, inner)
}

const showNotification = (noti, inner) => {
    const div = document.createElement(`div`)
    div.classList.add(`bubble__chat`)
    !noti.read && div.classList.add(`unread`);
    div.innerHTML = inner
    chatsWall.append(div)
}

const readNotificarions = () => {
    notifications.forEach(element => {
        switch (element.activity) {
            case 'reacted to your recent post':
                showReact(element)
                break;
            case 'followed you':
                showFollow(element)
                break;
            case 'has joined your group':
            case 'left the group':
                showGroup(element)
                break;
            case 'sent you a private message':
                showMessage(element)
                break;
            case 'commented on your picture':
                showPicture(element)
                break;
        }
    });
}

readNotificarions()