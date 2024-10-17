import parallax from './components/parallax.js';
import activeMenu from './components/selected_menu.js';
import carousel from './helpers/carousel.js';
import updateDateYear from './helpers/date_updater.js';
import './helpers/loader.js';
import './helpers/map.js';
import resetToHome from './helpers/reload_page.js';
import sendEmail from './helpers/send_form.js';

resetToHome();

activeMenu();

parallax();

updateDateYear();

sendEmail();

carousel();

svgPath();
