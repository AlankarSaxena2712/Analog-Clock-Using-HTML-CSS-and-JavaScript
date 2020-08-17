setInterval(() => {
    date = new Date();
    htime = date.getHours();
    mtime = date.getMinutes();
    stime = date.getSeconds();
    mstime = date.getMilliseconds();
    hrotation = 30 * htime + mtime / 2;
    mrotation = 6 * mtime + 0.1 * stime;
    srotation = 6 * stime + 6 * mstime / 1000;
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1)