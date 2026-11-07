document.addEventListener("DOMContentLoaded", function () {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    
    alert(`Hôm nay là ngày ${formattedDate}, Chào mừng bạn đến với trang của Nguyễn Tuấn Việt!`);

    document.getElementById("current-year").textContent = year;

    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        document.getElementById("digital-clock").textContent = `${hours}:${minutes}:${seconds}`;
    }
    updateClock();
    setInterval(updateClock, 1000);

    const avatarImg = document.getElementById("avatar-img");
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
    const closeModal = document.getElementById("close-modal");

    avatarImg.addEventListener("click", function () {
        modal.style.display = "flex";
        modalImg.src = this.src;
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    const toggleBtn = document.getElementById("toggle-hobby-btn");
    const extraHobbies = document.querySelectorAll(".extra-hobby");
    let isExpanded = false;

    toggleBtn.addEventListener("click", function () {
        isExpanded = !isExpanded;
        extraHobbies.forEach(card => {
            if (isExpanded) {
                card.classList.add("show");
            } else {
                card.classList.remove("show");
            }
        });

        if (isExpanded) {
            toggleBtn.textContent = "Thu gọn";
        } else {
            toggleBtn.textContent = "Xem thêm";
        }
    });
});