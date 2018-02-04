import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import DarkTheHeader from "./modules/DarkTheHeader";

new MobileMenu();
new RevealOnScroll('.feature-item','85%');
new RevealOnScroll('.testimonial','80%');

/**** going down */
/*going down is getting darker on our-beginning*/
new DarkTheHeader('.page-header','#our-beginning','page-header--is-darker','down',true,'25%');
new DarkTheHeader('.page-header__logo','#our-beginning','page-header__logo--is-darker','down',true,'25%');

/*going down removes darker on features*/
new DarkTheHeader('.page-header','#features','page-header--is-darker','down',false,'25%');
new DarkTheHeader('.page-header__logo','#features','page-header__logo--is-darker','down',false,'25%');
/*going down adds lighter on features*/
new DarkTheHeader('.page-header','#features','page-header--is-lighter','down',true,'25%');
new DarkTheHeader('.page-header__logo','#features','page-header__logo--is-lighter','down',true,'25%');

/*going down removes lighter on testimonials*/
new DarkTheHeader('.page-header','#testimonials','page-header--is-lighter','down',false,'25%');
new DarkTheHeader('.page-header__logo','#testimonials','page-header__logo--is-lighter','down',false,'25%');
/*going down adds darker on testimonials*/
new DarkTheHeader('.page-header','#testimonials', 'page-header--is-darker','down',true,'25%');
new DarkTheHeader('.page-header__logo','#testimonials','page-header__logo--is-darker','down',true,'25%');


/**** going up */
/*going up removes darker on large-hero*/
new DarkTheHeader('.page-header','.large-hero','page-header--is-darker','up',false,'-100%');
new DarkTheHeader('.page-header__logo','.large-hero','page-header__logo--is-darker','up',false,'-100%');

/*going up adds darker on our-beginning*/
new DarkTheHeader('.page-header','#features','page-header--is-darker','up',true,'0%');
new DarkTheHeader('.page-header__logo','#features','page-header__logo--is-darker','up',true,'0%');
/*going up removes lighter on our-beginning*/
new DarkTheHeader('.page-header','#features','page-header--is-lighter','up',false,'0%');
new DarkTheHeader('.page-header__logo','#features','page-header__logo--is-lighter','up',false,'0%');

/*going up removes darker on features*/
new DarkTheHeader('.page-header','#features','page-header--is-darker','up',false,'-100%');
new DarkTheHeader('.page-header__logo','#features','page-header__logo--is-darker','up',false,'-100%');
/*going up adds lighter on features*/
new DarkTheHeader('.page-header','#features','page-header--is-lighter','up',true,'-100%');
new DarkTheHeader('.page-header__logo','#features','page-header__logo--is-lighter','up',true,'-100%');
