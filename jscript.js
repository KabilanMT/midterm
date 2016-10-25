//global variables
var topCheck = 0;
var bottomCheck = 0;

//change pictures
function InnerChange(itself) {
    imageLink = itself.src;
    bigImage = document.getElementById("HeroBig");
    bigImage.style.backgroundImage = "url(" + imageLink + ")";
    bigImage.style.backgroundPosition = "top center";
    bigImage.style.backgroundSize = "cover";
    
    className = itself.className;
//    alert(className);
    
    title = document.getElementById("Title");
    para = document.getElementById("paragraph");
    

    
    if (className == 1) {
        title.innerHTML = "Black Panther";
        para.innerHTML = "The	Black	Panther	(T'Challa)	is	a	fictional	superhero	appearing	in	American	comic	books	published	by	Marvel	Comics.	Created	by	writer-editor	Stan	Lee	and	penciller	and	co-plotter	Jack	Kirby,	he	first	appeared	in	Fantastic	Four	#52	(July	1966).	He	is	the	first	black	superhero	in	mainstream	American	comics,	debuting	years	before	such	early	African-American	superheroes	as	Marvel	Comics'	the	Falcon	(1969)	and	Luke	Cage	(1972),	and	DC	Comics'	Green	Lantern	John	Stewart	(1971),	Tyroc	(1976),	and	Black	Lightning	(1977).	The	character	is	usually	depicted	as	the	king	and	protector	of	Wakanda,	a	fictional	African	nation.	Chadwick	Boseman	portrays	the	Black	Panther	in	Captain	America:	Civil	War	(2016)	and	is	set	to	return	in	Black	Panther	(2018),	both	set	in	the	Marvel	Cinematic	Universe.";    
    } 
    else if (className == 2) {
        title.innerHTML = "Doctor Strange";
        para.innerHTML = "Dr.	Stephen	Vincent	Strange,	also	known	as	Doctor	Strange,	is	a	fictional	superhero	appearing	in	American	comic	books	published	by	Marvel	Comics.	Created by	artist	and	character	conceptualist	Steve	Ditko,	the	character	first	appeared	in	Strange	Tales	#110	(cover-dated	July	1963).	A	former	neurosurgeon,	Strange	serves	as	the	Sorcerer	Supreme,	the	primary	protector	of	Earth	against	magical	and	mystical	threats.	Debuting	in	the	Silver	Age	of	comics,	the	character	has	been	featured	in	several	comic	book	series	and	adapted	in	a	variety	of	media	including	video	games,	an	animated	television	show,	and	films.	Inspired	by	storytellings	of	black	magic	and	Chandu	the	Magician,	Strange	was	created	to	bring	a	different	kind	of	character	and	themes	of	mysticism	to	Marvel	Comics.";
    }
    else if (className == 3) {
        title.innerHTML = "She Hulk";
        para.innerHTML = "She-Hulk	(Jennifer	Walters)	is	a	fictional	character	appearing	in	American	comic	books	published	by	Marvel	Comics.	Created	by	writer	Stan	Lee	and	artist	John	Buscema,	she	first	appeared	in	Savage	She-Hulk	#1	(February	1980).	A	cousin	to	Dr.	Bruce	Banner,	Walters	once	received	an	emergency	blood	transfusion	from	him	when	she	was	wounded,	which	led	to	her	acquiring a	milder	version	of	his	Hulk	condition.	As	such,	Walters	becomes	a	large	powerful	green-hued	version	of	herself	while	still	largely	retaining	her	personality;	in	particular	she	retains	her	intelligence	and	emotional	control,	though	like	Hulk,	she	still	becomes	stronger	if	enraged.	In	later	issues,	her	transformation	is	permanent.";
    }
    else if (className == 4) {
        title.innerHTML = "Thor";
        para.innerHTML = "Thor	is	a	fictional	superhero	appearing	in	American	comic	books	published	by	Marvel	Comics.	The	character,	based	on	the	Norse	mythological	deity	of	the	same	name,	is	the	Asgardian	god	of	thunder	and	possesses	the	enchanted	hammer	Mjolnir,	which	grants	him	the	ability	of	flight	and	weather	manipulation	amongst	his	other	superhuman	attributes.";
    }
    else if (className == 5) {
        title.innerHTML = "Iron Fist";
        para.innerHTML = 'Iron	Fist	(Daniel	"Danny"	Rand)	is	a	fictional	superhero	appearing	in	American	comic	books	published	by	Marvel	Comics.	Created	by	Roy	Thomas	and	Gil	Kane,	Iron	Fist	first	appeared	in	Marvel	Premiere	#15	(May	1974).	The	character	is	a	practitioner	of	martial	arts	and	the	wielder	of	a	mystical	force	known	as	the	Iron	Fist,	which	allows	him	to	summon	and	focus	his	chi.	He	starred	in	his	own	solo	series	in	the	1970s,	and	shared	the	title	Power	Man	and	Iron	Fist	for	several	years	with	Luke	Cage,	partnering	with	Cage	to	form	the	superhero	team	Heroes	for	Hire.	The	character	has	starred	in	numerous	solo	titles	since,	including	The	Immortal	Iron	Fist,	which	expanded	on	his	origin	story	and	the	history	of	the	Iron	Fist.';
    }
    else if (className == 6) {
        title.innerHTML = "Hawkeye";
        para.innerHTML = "Hawkeye	(Clint	Barton)	is	a	fictional	superhero	appearing	in	American	comic	books	published	by	Marvel	Comics.	Created	by	writer	Stan	Lee	and	artist	Don	Heck,	the	character	first	appeared	as	a	villain	in	Tales	of	Suspense	#57	(Sept.	1964)	and	later	joined	the	Avengers	in	The	Avengers	#16	(May	1965).	He	has	been	a	prominent	member	of	the	team	ever	since.	He	was	also	ranked	at	#44	on	IGN's	Top	100	Comic	Book	Heroes	list."
    }
    else if (className == 8) {
        title.innerHTML = "Nova (Richard Rider)";
        para.innerHTML = "Nova	(Richard	Rider)	is	a	fictional	superhero	appearing	in	American	comic	books	published	by	Marvel	Comics.	The	character	appeared	historically	as	the	star	of	his	own	series,	and	at	other	times,	as	a	supporting	character	in	team	books	such	as	The	New	Warriors.	He	is	a	member	of	the	intergalactic	police	force	known	as	the	Nova	Corps,	for which	he	gained	superhuman	abilities	including	enhanced	strength,	flight	and	resistance	to	injury";
    }
    else if (className == 10) {
        title.innerHTML = "Apocolypse";
        para.innerHTML = "Apocalypse	(En	Sabah	Nur)	is	a	fictional	supervillain	appearing	in	comic	books	published	by	Marvel	Comics.	He	is	the	world's	very	first	mutant,	and	is	usually	portrayed	as	one	of	the	archenemies	of	the	X-Men.	Created	by	writer	Louise	Simonson	and	artist	Jackson	Guice,	Apocalypse	first	appeared	in	X-Factor	#5	(May	1986).";
    }
    else if (className == 11) {
        title.innerHTML = inputTitle1;
        para.innerHTML = inputPara1;
    }
    else if (className == 12) {
        title.innerHTML = inputTitle2;
        para.innerHTML = inputPara2;
    }
    else {
        alert("ERROR");
    }
}

//menu
function show(itself) {
    menu = document.getElementById("Menu");
    menu.style.right = "0";
    itself.setAttribute("onclick", "hide(this)");
    
}
function hide(itself) {
    menu = document.getElementById("Menu");
    menu.style.right = "-25vw";
    itself.setAttribute("onclick", "show(this)");
    
}

function NewElement(itself) {
    //outer container
    if (topCheck == 0) {
        var container = document.getElementById("TopContainer");
        setClass = 11;
        topCheck = 1;
        inputTitle = document.getElementById("TitleInput");
        inputPara = document.getElementById("ParaInput");

        inputTitle1 = inputTitle.value;
        inputPara1 = inputPara.value;
    }
    else if (bottomCheck == 0) {
        var container = document.getElementById("BottomContainer");
        setClass = 12;
        bottomCheck = 1;
        inputTitle = document.getElementById("TitleInput");
        inputPara = document.getElementById("ParaInput");

        inputTitle2 = inputTitle.value;
        inputPara2 = inputPara.value;
        }
    else {
        alert("***ERROR: No available space. Try Refreshing the page.***")
    }  
    
    //gets the image
    newImage = itself.src;
    
    //new item
    var newItem = document.createElement("img");
    container.appendChild(newItem);
    newItem.setAttribute("ID", "ImageHero");
    newItem.setAttribute("src", newImage);
    newItem.setAttribute("onclick", "InnerChange(this)");
    newItem.setAttribute("class", setClass);
    
    
    //gets input
    
    
     
    
//    var msgInput = document.getElementById("msg")
//
//    msgInput.value;     
}









