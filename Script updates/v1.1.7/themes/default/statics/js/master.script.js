"use strict";

$(document).ready(function(){
	var csrf_token = $("input#csrf-token").val();
	$.ajaxSetup({ 
	    data: {
	        hash: ((csrf_token != undefined) ? csrf_token : 0)
	    },
	    cache: false,
	    timeout:(1000 * 360)
	});

	$.fn.reloadPage = function(_time = 0) {
		setTimeout(function(){
			this.location.reload();
		},_time);
	}

	$.fn.replaceClass = function(class1,class2) {  
		$(this).removeClass(class1);
		$(this).addClass(class2);
		return this;
	};

	if ($("div#main-preloader-holder").length) {
		$("div#main-preloader-holder").fadeOut(1500,function(){
			$(this).remove();
		});
	}

	$(document).on('hidden.bs.modal','div[data-onclose="remove"]', function () {  
        $(this).remove();
    });

    $.fn.scroll2inner = function(elem, speed) { 
	    $(this).animate({
	        scrollTop:  ($(this).scrollTop() - $(this).offset().top + $(elem).offset().top - 50)
	    }, speed == undefined ? 1000 : speed); 
	    return this; 
	};

	$.fn.scroll2 = function (speed = 500,top_offset = 50) {
		if (typeof(speed) === 'undefined')
			speed = 500;

		$('html, body').animate({
			scrollTop: ($(this).offset().top - top_offset)
		}, speed);

		return $(this);
	};

	$(document).on('show.bs.modal', 'div.modal', function() {
	    $('body').find('div.modal.show').not($(this)).each(function(index, el) {
	    	$(this).addClass('d-none');
	    });

	    $('body').find('div.modal-backdrop.show').each(function(index, el) {
	    	$(this).addClass('d-none');
	    });
	});

	$(document).on('hide.bs.modal', 'div.modal', function() {
	    $('body').find('div.modal.show.d-none').not($(this)).each(function(index, el) {
	    	$(this).removeClass('d-none');
	    });

	    $('body').find('div.modal-backdrop.show.d-none').each(function(index, el) {
	    	$(this).removeClass('d-none');
	    });
	});

	$(document).on('click', '[data-anchor]', function(event) {
		event.preventDefault();

		var link = $(this).data('anchor');

		SMColibri.spa_load(link);
	});

	$(document).on('click.bs.dropdown.data-api', 'div.vue-dropdown-multiselect', function (e) {
		e.stopPropagation();
	});
});

window.mobileCheck = function() {
	let check = false;
	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
	return check;
};

function cl_load_media(e = false) {
	if (e) {
		var n = $(e).parents('[data-lozad-media="loading"]');
		n.attr('data-lozad-media', 'loaded');
		n.find('[data-lozad-preloader="icon"]').remove();
	}
}

function now_uts() {
	return $.now() / 1000 | 0;
}


function cl_redirect(url = "/", blank = false) {

	if (blank == true) {
		window.open(url, '_blank');
	}
	else {
		document.location.href = url;
	}
	
	return;
}

function cl_empty(value = '') {
	if (value === '' || value === null || value === undefined || value == 0) {
        return true
    }
    else {
        return false
    }
}

function cl_uname_valid(uname = null) {
	if (cl_empty(uname)) {
		return false;
	} 

	else {
		return /^[a-zA-Z0-9_]{3,25}$/.test(uname);
	}

	return false;
}

String.prototype.format = function () {
    var a = this;
    for (var k in arguments) {
        a = a.replace(new RegExp("\\{" + k + "\\}", 'g'), arguments[k]);
    }
    return a
}

Array.prototype.contains = function(obj) {
	
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }

    return false;
}

Array.prototype.rmItem = function(item) {
	
    for(var i = 0; i < this.length; i++){ 
    	if (this[i] === item) { 
    		this.splice(i, 1); break;
    	}
    }

    return this;
}

Array.prototype.getItem = function(item) {
    return this[item];
}

Array.prototype.hasIndex = function(item) {
    for (var i = 0; i < this.length; i++) {
    	if (item === i) {
    		return true;
    	}
    }

    return false;
}

String.prototype.insert_at = function(index, string) {   
  return this.substr(0, index) + string + this.substr(index);
}

var delay = (function(){
	var timer = 0;
	return function(callback, ms){
		clearTimeout (timer);
		timer = setTimeout(callback, ms);
	};
})();

function log(val = null) {
	console.log(val);
}

function cl_bs_notify(msg = "", time = 1000) {
	if (cl_empty(msg)) {
		return false;
	}

	else {
		$("body").find('div.main-modalnotif-container').each(function(index, el) {
			$(el).remove();
		}).promise().done(function() {
			$("body").append($("<div>",{
				class: "main-modalnotif-container",
				html: $("<span>", {
					text: msg,
                    class: "animated fadeInUp"
				})
			}));

			setTimeout(function() {
				$("body").find('div.main-modalnotif-container').each(function(index, el) {
					$(el).addClass('animated fadeOutDown');
				});
			}, time);
		});
	}
}

function cl_parse_url_parms(text) {

	let values = text.split(/\&/);
	let data   = {};
	let val    = null;

	for (var i = 0; i < values.length; i++) {

		val = values[i].split(':');
		
		data[val[0]] = val[1];
	}

	return data;
}

function cl_randint(min = 0, max = 0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cl_get_ulang() {
	var lang       = window.navigator.languages ? window.navigator.languages[0] : null;
    var lang       = lang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
	var short_lang = lang;

	if (short_lang.indexOf('-') !== -1) {
		short_lang = short_lang.split('-')[0];
	}

	else if (short_lang.indexOf('_') !== -1) {
		short_lang = short_lang.split('_')[0];
	}

	return short_lang;
}


window.cl_emoticons = Object({
    people: {
        smile: "😄",
        smiley: "😃",
        grinning: "😀",
        blush: "😊",
        wink: "😉",
        heart_eyes: "😍",
        kissing_heart: "😘",
        kissing_closed_eyes: "😚",
        kissing: "😗",
        kissing_smiling_eyes: "😙",
        stuck_out_tongue_winking_eye: "😜",
        stuck_out_tongue_closed_eyes: "😝",
        stuck_out_tongue: "😛",
        flushed: "😳",
        grin: "😁",
        pensive: "😔",
        relieved: "😌",
        unamused: "😒",
        disappointed: "😞",
        persevere: "😣",
        cry: "😢",
        joy: "😂",
        sob: "😭",
        sleepy: "😪",
        disappointed_relieved: "😥",
        cold_sweat: "😰",
        sweat_smile: "😅",
        sweat: "😓",
        weary: "😩",
        tired_face: "😫",
        fearful: "😨",
        scream: "😱",
        angry: "😠",
        rage: "😡",
        triumph: "😤",
        confounded: "😖",
        laughing: "😆",
        yum: "😋",
        mask: "😷",
        sunglasses: "😎",
        sleeping: "😴",
        dizzy_face: "😵",
        astonished: "😲",
        worried: "😟",
        frowning: "😦",
        anguished: "😧",
        imp: "👿",
        open_mouth: "😮",
        grimacing: "😬",
        neutral_face: "😐",
        confused: "😕",
        hushed: "😯",
        smirk: "😏",
        expressionless: "😑",
        man_with_gua_pi_mao: "👲",
        man_with_turban: "👳",
        cop: "👮",
        construction_worker: "👷",
        guardsman: "💂",
        baby: "👶",
        boy: "👦",
        girl: "👧",
        man: "👨",
        woman: "👩",
        older_man: "👴",
        older_woman: "👵",
        person_with_blond_hair: "👱",
        angel: "👼",
        princess: "👸",
        smiley_cat: "😺",
        smile_cat: "😸",
        heart_eyes_cat: "😻",
        kissing_cat: "😽",
        smirk_cat: "😼",
        scream_cat: "🙀",
        crying_cat_face: "😿",
        joy_cat: "😹",
        pouting_cat: "😾",
        japanese_ogre: "👹",
        japanese_goblin: "👺",
        see_no_evil: "🙈",
        hear_no_evil: "🙉",
        speak_no_evil: "🙊",
        skull: "💀",
        alien: "👽",
        hankey: "💩",
        fire: "🔥",
        sparkles: "✨",
        star2: "🌟",
        dizzy: "💫",
        boom: "💥",
        anger: "💢",
        sweat_drops: "💦",
        droplet: "💧",
        zzz: "💤",
        dash: "💨",
        ear: "👂",
        eyes: "👀",
        nose: "👃",
        tongue: "👅",
        lips: "👄",
        thumbs_up: "👍",
        "-1": "👎",
        ok_hand: "👌",
        facepunch: "👊",
        fist: "✊",
        wave: "👋",
        hand: "✋",
        open_hands: "👐",
        point_up_2: "👆",
        point_down: "👇",
        point_right: "👉",
        point_left: "👈",
        raised_hands: "🙌",
        pray: "🙏",
        clap: "👏",
        muscle: "💪",
        walking: "🚶",
        runner: "🏃",
        dancer: "💃",
        couple: "👫",
        family: "👪",
        couplekiss: "💏",
        couple_with_heart: "💑",
        dancers: "👯",
        ok_woman: "🙆",
        no_good: "🙅",
        information_desk_person: "💁",
        raising_hand: "🙋",
        massage: "💆",
        haircut: "💇",
        nail_care: "💅",
        bride_with_veil: "👰",
        person_with_pouting_face: "🙎",
        person_frowning: "🙍",
        bow: "🙇",
        tophat: "🎩",
        crown: "👑",
        womans_hat: "👒",
        athletic_shoe: "👟",
        mans_shoe: "👞",
        sandal: "👡",
        high_heel: "👠",
        boot: "👢",
        shirt: "👕",
        necktie: "👔",
        womans_clothes: "👚",
        dress: "👗",
        running_shirt_with_sash: "🎽",
        jeans: "👖",
        kimono: "👘",
        bikini: "👙",
        briefcase: "💼",
        handbag: "👜",
        pouch: "👝",
        purse: "👛",
        eyeglasses: "👓",
        ribbon: "🎀",
        closed_umbrella: "🌂",
        lipstick: "💄",
        yellow_heart: "💛",
        blue_heart: "💙",
        purple_heart: "💜",
        green_heart: "💚",
        broken_heart: "💔",
        heartpulse: "💗",
        heartbeat: "💓",
        two_hearts: "💕",
        sparkling_heart: "💖",
        revolving_hearts: "💞",
        cupid: "💘",
        love_letter: "💌",
        kiss: "💋",
        ring: "💍",
        gem: "💎",
        bust_in_silhouette: "👤",
        speech_balloon: "💬",
        footprints: "👣",
    },
    nature: {
        dog: "🐶",
        wolf: "🐺",
        cat: "🐱",
        mouse: "🐭",
        hamster: "🐹",
        rabbit: "🐰",
        frog: "🐸",
        tiger: "🐯",
        koala: "🐨",
        bear: "🐻",
        pig: "🐷",
        pig_nose: "🐽",
        cow: "🐮",
        boar: "🐗",
        monkey_face: "🐵",
        monkey: "🐒",
        horse: "🐴",
        sheep: "🐑",
        elephant: "🐘",
        panda_face: "🐼",
        penguin: "🐧",
        bird: "🐦",
        baby_chick: "🐤",
        hatched_chick: "🐥",
        hatching_chick: "🐣",
        chicken: "🐔",
        snake: "🐍",
        turtle: "🐢",
        bug: "🐛",
        bee: "🐝",
        ant: "🐜",
        beetle: "🐞",
        snail: "🐌",
        octopus: "🐙",
        shell: "🐚",
        tropical_fish: "🐠",
        fish: "🐟",
        dolphin: "🐬",
        whale: "🐳",
        racehorse: "🐎",
        dragon_face: "🐲",
        blowfish: "🐡",
        camel: "🐫",
        poodle: "🐩",
        feet: "🐾",
        bouquet: "💐",
        cherry_blossom: "🌸",
        tulip: "🌷",
        four_leaf_clover: "🍀",
        rose: "🌹",
        sunflower: "🌻",
        hibiscus: "🌺",
        maple_leaf: "🍁",
        leaves: "🍃",
        fallen_leaf: "🍂",
        herb: "🌿",
        ear_of_rice: "🌾",
        mushroom: "🍄",
        cactus: "🌵",
        palm_tree: "🌴",
        chestnut: "🌰",
        seedling: "🌱",
        blossom: "🌼",
        new_moon: "🌑",
        first_quarter_moon: "🌓",
        moon: "🌔",
        full_moon: "🌕",
        first_quarter_moon_with_face: "🌛",
        crescent_moon: "🌙",
        earth_asia: "🌏",
        volcano: "🌋",
        milky_way: "🌌",
        stars: "🌠",
        partly_sunny: "⛅",
        snowman: "⛄",
        cyclone: "🌀",
        foggy: "🌁",
        rainbow: "🌈",
        ocean: "🌊",
    },
    objects: {
        bamboo: "🎍",
        gift_heart: "💝",
        dolls: "🎎",
        school_satchel: "🎒",
        mortar_board: "🎓",
        flags: "🎏",
        fireworks: "🎆",
        sparkler: "🎇",
        wind_chime: "🎐",
        rice_scene: "🎑",
        jack_o_lantern: "🎃",
        ghost: "👻",
        santa: "🎅",
        christmas_tree: "🎄",
        gift: "🎁",
        tanabata_tree: "🎋",
        tada: "🎉",
        confetti_ball: "🎊",
        balloon: "🎈",
        crossed_flags: "🎌",
        crystal_ball: "🔮",
        movie_camera: "🎥",
        camera: "📷",
        video_camera: "📹",
        vhs: "📼",
        cd: "💿",
        dvd: "📀",
        minidisc: "💽",
        floppy_disk: "💾",
        computer: "💻",
        iphone: "📱",
        telephone_receiver: "📞",
        pager: "📟",
        fax: "📠",
        satellite: "📡",
        tv: "📺",
        radio: "📻",
        loud_sound: "🔊",
        bell: "🔔",
        loudspeaker: "📢",
        mega: "📣",
        hourglass_flowing_sand: "⏳",
        hourglass: "⌛",
        alarm_clock: "⏰",
        watch: "⌚",
        unlock: "🔓",
        lock: "🔒",
        lock_with_ink_pen: "🔏",
        closed_lock_with_key: "🔐",
        key: "🔑",
        mag_right: "🔎",
        bulb: "💡",
        flashlight: "🔦",
        electric_plug: "🔌",
        battery: "🔋",
        mag: "🔍",
        bath: "🛀",
        toilet: "🚽",
        wrench: "🔧",
        nut_and_bolt: "🔩",
        hammer: "🔨",
        door: "🚪",
        smoking: "🚬",
        bomb: "💣",
        gun: "🔫",
        hocho: "🔪",
        pill: "💊",
        syringe: "💉",
        moneybag: "💰",
        yen: "💴",
        dollar: "💵",
        credit_card: "💳",
        money_with_wings: "💸",
        calling: "📲",
        "e-mail": "📧",
        inbox_tray: "📥",
        outbox_tray: "📤",
        envelope_with_arrow: "📩",
        incoming_envelope: "📨",
        mailbox: "📫",
        mailbox_closed: "📪",
        postbox: "📮",
        package: "📦",
        memo: "📝",
        page_facing_up: "📄",
        page_with_curl: "📃",
        bookmark_tabs: "📑",
        bar_chart: "📊",
        chart_with_upwards_trend: "📈",
        chart_with_downwards_trend: "📉",
        scroll: "📜",
        clipboard: "📋",
        date: "📅",
        calendar: "📆",
        card_index: "📇",
        file_folder: "📁",
        open_file_folder: "📂",
        pushpin: "📌",
        paperclip: "📎",
        straight_ruler: "📏",
        triangular_ruler: "📐",
        closed_book: "📕",
        green_book: "📗",
        blue_book: "📘",
        orange_book: "📙",
        notebook: "📓",
        notebook_with_decorative_cover: "📔",
        ledger: "📒",
        books: "📚",
        book: "📖",
        bookmark: "🔖",
        name_badge: "📛",
        newspaper: "📰",
        art: "🎨",
        clapper: "🎬",
        microphone: "🎤",
        headphones: "🎧",
        musical_score: "🎼",
        musical_note: "🎵",
        notes: "🎶",
        musical_keyboard: "🎹",
        violin: "🎻",
        trumpet: "🎺",
        saxophone: "🎷",
        guitar: "🎸",
        space_invader: "👾",
        video_game: "🎮",
        black_joker: "🃏",
        flower_playing_cards: "🎴",
        mahjong: "🀄",
        game_die: "🎲",
        dart: "🎯",
        football: "🏈",
        basketball: "🏀",
        soccer: "⚽",
        baseball: "⚾",
        tennis: "🎾",
        "8ball": "🎱",
        bowling: "🎳",
        golf: "⛳",
        checkered_flag: "🏁",
        trophy: "🏆",
        ski: "🎿",
        snowboarder: "🏂",
        swimmer: "🏊",
        surfer: "🏄",
        fishing_pole_and_fish: "🎣",
        tea: "🍵",
        sake: "🍶",
        beer: "🍺",
        beers: "🍻",
        cocktail: "🍸",
        tropical_drink: "🍹",
        wine_glass: "🍷",
        fork_and_knife: "🍴",
        pizza: "🍕",
        hamburger: "🍔",
        fries: "🍟",
        poultry_leg: "🍗",
        meat_on_bone: "🍖",
        spaghetti: "🍝",
        curry: "🍛",
        fried_shrimp: "🍤",
        bento: "🍱",
        sushi: "🍣",
        fish_cake: "🍥",
        rice_ball: "🍙",
        rice_cracker: "🍘",
        rice: "🍚",
        ramen: "🍜",
        stew: "🍲",
        oden: "🍢",
        dango: "🍡",
        egg: "🍳",
        bread: "🍞",
        doughnut: "🍩",
        custard: "🍮",
        icecream: "🍦",
        ice_cream: "🍨",
        shaved_ice: "🍧",
        birthday: "🎂",
        cake: "🍰",
        cookie: "🍪",
        chocolate_bar: "🍫",
        candy: "🍬",
        lollipop: "🍭",
        honey_pot: "🍯",
        apple: "🍎",
        green_apple: "🍏",
        tangerine: "🍊",
        cherries: "🍒",
        grapes: "🍇",
        watermelon: "🍉",
        strawberry: "🍓",
        peach: "🍑",
        melon: "🍈",
        banana: "🍌",
        pineapple: "🍍",
        sweet_potato: "🍠",
        eggplant: "🍆",
        tomato: "🍅",
        corn: "🌽",
    },
    places: {
        house: "🏠",
        house_with_garden: "🏡",
        school: "🏫",
        office: "🏢",
        post_office: "🏣",
        hospital: "🏥",
        bank: "🏦",
        convenience_store: "🏪",
        love_hotel: "🏩",
        hotel: "🏨",
        wedding: "💒",
        church: "⛪",
        department_store: "🏬",
        city_sunrise: "🌇",
        city_sunset: "🌆",
        japanese_castle: "🏯",
        european_castle: "🏰",
        tent: "⛺",
        factory: "🏭",
        tokyo_tower: "🗼",
        japan: "🗾",
        mount_fuji: "🗻",
        sunrise_over_mountains: "🌄",
        sunrise: "🌅",
        night_with_stars: "🌃",
        statue_of_liberty: "🗽",
        bridge_at_night: "🌉",
        carousel_horse: "🎠",
        ferris_wheel: "🎡",
        fountain: "⛲",
        roller_coaster: "🎢",
        ship: "🚢",
        boat: "⛵",
        speedboat: "🚤",
        rocket: "🚀",
        seat: "💺",
        station: "🚉",
        bullettrain_side: "🚄",
        bullettrain_front: "🚅",
        metro: "🚇",
        railway_car: "🚃",
        bus: "🚌",
        blue_car: "🚙",
        car: "🚗",
        taxi: "🚕",
        truck: "🚚",
        rotating_light: "🚨",
        police_car: "🚓",
        fire_engine: "🚒",
        ambulance: "🚑",
        bike: "🚲",
        barber: "💈",
        busstop: "🚏",
        ticket: "🎫",
        traffic_light: "🚥",
        construction: "🚧",
        beginner: "🔰",
        fuelpump: "⛽",
        izakaya_lantern: "🏮",
        slot_machine: "🎰",
        moyai: "🗿",
        circus_tent: "🎪",
        performing_arts: "🎭",
        round_pushpin: "📍",
        triangular_flag_on_post: "🚩",
    },
    symbols: {
        keycap_ten: "🔟",
        1234: "🔢",
        symbols: "🔣",
        capital_abcd: "🔠",
        abcd: "🔡",
        abc: "🔤",
        arrow_up_small: "🔼",
        arrow_down_small: "🔽",
        rewind: "⏪",
        fast_forward: "⏩",
        arrow_double_up: "⏫",
        arrow_double_down: "⏬",
        ok: "🆗",
        new: "🆕",
        up: "🆙",
        cool: "🆒",
        free: "🆓",
        ng: "🆖",
        signal_strength: "📶",
        cinema: "🎦",
        koko: "🈁",
        u6307: "🈯",
        u7a7a: "🈳",
        u6e80: "🈵",
        u5408: "🈴",
        u7981: "🈲",
        ideograph_advantage: "🉐",
        u5272: "🈹",
        u55b6: "🈺",
        u6709: "🈶",
        u7121: "🈚",
        restroom: "🚻",
        mens: "🚹",
        womens: "🚺",
        baby_symbol: "🚼",
        wc: "🚾",
        no_smoking: "🚭",
        u7533: "🈸",
        accept: "🉑",
        cl: "🆑",
        sos: "🆘",
        id: "🆔",
        no_entry_sign: "🚫",
        underage: "🔞",
        no_entry: "⛔",
        negative_squared_cross_mark: "❎",
        white_check_mark: "✅",
        heart_decoration: "💟",
        vs: "🆚",
        vibration_mode: "📳",
        mobile_phone_off: "📴",
        ab: "🆎",
        diamond_shape_with_a_dot_inside: "💠",
        ophiuchus: "⛎",
        six_pointed_star: "🔯",
        atm: "🏧",
        chart: "💹",
        heavy_dollar_sign: "💲",
        currency_exchange: "💱",
        x: "❌",
        exclamation: "❗",
        question: "❓",
        grey_exclamation: "❕",
        grey_question: "❔",
        o: "⭕",
        top: "🔝",
        end: "🔚",
        back: "🔙",
        on: "🔛",
        soon: "🔜",
        arrows_clockwise: "🔃",
        clock12: "🕛",
        clock1: "🕐",
        clock2: "🕑",
        clock3: "🕒",
        clock4: "🕓",
        clock5: "🕔",
        clock6: "🕕",
        clock7: "🕖",
        clock8: "🕗",
        clock9: "🕘",
        clock10: "🕙",
        clock11: "🕚",
        heavy_plus_sign: "➕",
        heavy_minus_sign: "➖",
        heavy_division_sign: "➗",
        white_flower: "💮",
        100: "💯",
        radio_button: "🔘",
        link: "🔗",
        curly_loop: "➰",
        trident: "🔱",
        small_red_triangle: "🔺",
        black_square_button: "🔲",
        white_square_button: "🔳",
        red_circle: "🔴",
        large_blue_circle: "🔵",
        small_red_triangle_down: "🔻",
        white_large_square: "⬜",
        black_large_square: "⬛",
        large_orange_diamond: "🔶",
        large_blue_diamond: "🔷",
        small_orange_diamond: "🔸",
        small_blue_diamond: "🔹",
    },
    flags: [
        "🏁",
        "🚩",
        "🎌",
        "🏴",
        "🏳️",
        "🏳️‍🌈",
        "🏳‍🌈",
        "🏴‍☠️",
        "🇦🇨",
        "🇦🇩",
        "🇦🇪",
        "🇦🇫",
        "🇦🇬",
        "🇦🇮",
        "🇦🇱",
        "🇦🇲",
        "🇦🇴",
        "🇦🇶",
        "🇦🇷",
        "🇦🇸",
        "🇦🇹",
        "🇦🇺",
        "🇦🇼",
        "🇦🇽",
        "🇦🇿",
        "🇧🇦",
        "🇧🇧",
        "🇧🇩",
        "🇧🇪",
        "🇧🇫",
        "🇧🇬",
        "🇧🇭",
        "🇧🇮",
        "🇧🇯",
        "🇧🇱",
        "🇧🇲",
        "🇧🇳",
        "🇧🇴",
        "🇧🇶",
        "🇧🇷",
        "🇧🇸",
        "🇧🇹",
        "🇧🇻",
        "🇧🇼",
        "🇧🇾",
        "🇧🇿",
        "🇨🇦",
        "🇨🇨",
        "🇨🇩",
        "🇨🇫",
        "🇨🇬",
        "🇨🇭",
        "🇨🇮",
        "🇨🇰",
        "🇨🇱",
        "🇨🇲",
        "🇨🇳",
        "🇨🇴",
        "🇨🇵",
        "🇨🇷",
        "🇨🇺",
        "🇨🇻",
        "🇨🇼",
        "🇨🇽",
        "🇨🇾",
        "🇨🇿",
        "🇩🇪",
        "🇩🇬",
        "🇩🇯",
        "🇩🇰",
        "🇩🇲",
        "🇩🇴",
        "🇩🇿",
        "🇪🇦",
        "🇪🇨",
        "🇪🇪",
        "🇪🇬",
        "🇪🇭",
        "🇪🇷",
        "🇪🇸",
        "🇪🇹",
        "🇪🇺",
        "🇫🇮",
        "🇫🇯",
        "🇫🇰",
        "🇫🇲",
        "🇫🇴",
        "🇫🇷",
        "🇬🇦",
        "🇬🇧",
        "🇬🇩",
        "🇬🇪",
        "🇬🇫",
        "🇬🇬",
        "🇬🇭",
        "🇬🇮",
        "🇬🇱",
        "🇬🇲",
        "🇬🇳",
        "🇬🇵",
        "🇬🇶",
        "🇬🇷",
        "🇬🇸",
        "🇬🇹",
        "🇬🇺",
        "🇬🇼",
        "🇬🇾",
        "🇭🇰",
        "🇭🇲",
        "🇭🇳",
        "🇭🇷",
        "🇭🇹",
        "🇭🇺",
        "🇮🇨",
        "🇮🇩",
        "🇮🇪",
        "🇮🇱",
        "🇮🇲",
        "🇮🇳",
        "🇮🇴",
        "🇮🇶",
        "🇮🇷",
        "🇮🇸",
        "🇮🇹",
        "🇯🇪",
        "🇯🇲",
        "🇯🇴",
        "🇯🇵",
        "🇰🇪",
        "🇰🇬",
        "🇰🇭",
        "🇰🇮",
        "🇰🇲",
        "🇰🇳",
        "🇰🇵",
        "🇰🇷",
        "🇰🇼",
        "🇰🇾",
        "🇰🇿",
        "🇱🇦",
        "🇱🇧",
        "🇱🇨",
        "🇱🇮",
        "🇱🇰",
        "🇱🇷",
        "🇱🇸",
        "🇱🇹",
        "🇱🇺",
        "🇱🇻",
        "🇱🇾",
        "🇲🇦",
        "🇲🇨",
        "🇲🇩",
        "🇲🇪",
        "🇲🇫",
        "🇲🇬",
        "🇲🇭",
        "🇲🇰",
        "🇲🇱",
        "🇲🇲",
        "🇲🇳",
        "🇲🇴",
        "🇲🇵",
        "🇲🇶",
        "🇲🇷",
        "🇲🇸",
        "🇲🇹",
        "🇲🇺",
        "🇲🇻",
        "🇲🇼",
        "🇲🇽",
        "🇲🇾",
        "🇲🇿",
        "🇳🇦",
        "🇳🇨",
        "🇳🇪",
        "🇳🇫",
        "🇳🇬",
        "🇳🇮",
        "🇳🇱",
        "🇳🇴",
        "🇳🇵",
        "🇳🇷",
        "🇳🇺",
        "🇳🇿",
        "🇴🇲",
        "🇵🇦",
        "🇵🇪",
        "🇵🇫",
        "🇵🇬",
        "🇵🇭",
        "🇵🇰",
        "🇵🇱",
        "🇵🇲",
        "🇵🇳",
        "🇵🇷",
        "🇵🇸",
        "🇵🇹",
        "🇵🇼",
        "🇵🇾",
        "🇶🇦",
        "🇷🇪",
        "🇷🇴",
        "🇷🇸",
        "🇷🇺",
        "🇷🇼",
        "🇸🇦",
        "🇸🇧",
        "🇸🇨",
        "🇸🇩",
        "🇸🇪",
        "🇸🇬",
        "🇸🇭",
        "🇸🇮",
        "🇸🇯",
        "🇸🇰",
        "🇸🇱",
        "🇸🇲",
        "🇸🇳",
        "🇸🇴",
        "🇸🇷",
        "🇸🇸",
        "🇸🇹",
        "🇸🇻",
        "🇸🇽",
        "🇸🇾",
        "🇸🇿",
        "🇹🇦",
        "🇹🇨",
        "🇹🇩",
        "🇹🇫",
        "🇹🇬",
        "🇹🇭",
        "🇹🇯",
        "🇹🇰",
        "🇹🇱",
        "🇹🇲",
        "🇹🇳",
        "🇹🇴",
        "🇹🇷",
        "🇹🇹",
        "🇹🇻",
        "🇹🇼",
        "🇹🇿",
        "🇺🇦",
        "🇺🇬",
        "🇺🇲",
        "🇺🇳",
        "🇺🇸",
        "🇺🇾",
        "🇺🇿",
        "🇻🇦",
        "🇻🇨",
        "🇻🇪",
        "🇻🇬",
        "🇻🇮",
        "🇻🇳",
        "🇻🇺",
        "🇼🇫",
        "🇼🇸",
        "🇽🇰",
        "🇾🇪",
        "🇾🇹",
        "🇿🇦",
        "🇿🇲",
        "🇿🇼"
    ]
});