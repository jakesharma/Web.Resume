

$(function () {
    $('[data-bs-toggle="tooltip"]').tooltip({
    });
});

function VideoShow() {
    document.getElementById("view_video").style.display = "block";
};


// ----------For Button ChangeText----------
document.getElementById('btn-change-text').addEventListener('click',
    function () {
        if (document.getElementById('btn-change-here').innerHTML === 'Remove') {
            document.getElementById('btn-change-here').innerHTML = 'Show More';
        } else {
            document.getElementById('btn-change-here').innerHTML = 'Remove';
        }
    });


document.getElementById("about-us").addEventListener("click", About_us);
function About_us() {
    // ----------For ChangeDiv by Button----------
    document.getElementById("about_mode").style.display = "block";
    document.getElementById("skill_mode").style.display = "none";
    document.getElementById("experience_mode").style.display = "none";

    // ----------For Button ColorChange----------
    document.getElementById("about-us").style.backgroundColor = "black";
    document.getElementById("skill").style.backgroundColor = "";
    document.getElementById("experience").style.backgroundColor = "";
};

document.getElementById("skill").addEventListener("click", Skill);
function Skill() {
    // ----------For ChangeDiv by Button----------
    document.getElementById("about_mode").style.display = "none";
    document.getElementById("skill_mode").style.display = "block";
    document.getElementById("experience_mode").style.display = "none";

    // ----------For Button ColorChange----------
    document.getElementById("skill").style.backgroundColor = "black";
    document.getElementById("about-us").style.backgroundColor = "";
    document.getElementById("experience").style.backgroundColor = "";
    // document.getElementById("skill").setAttribute("class", "btn-with-arrow");
};

document.getElementById("experience").addEventListener("click", Experience);
function Experience() {
    // ----------For ChangeDiv by Button----------
    document.getElementById("about_mode").style.display = "none";
    document.getElementById("skill_mode").style.display = "none";
    document.getElementById("experience_mode").style.display = "block";

    // ----------For Button ColorChange----------
    document.getElementById("skill").style.backgroundColor = "";
    document.getElementById("about-us").style.backgroundColor = "";
    document.getElementById("experience").style.backgroundColor = "black";
};



