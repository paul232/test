<template>
	<div class="header">
		<div class="header__left__part">
			<a class="header__logo link">
				<img :src="logo" alt="">
			</a>
			<div class="header__lang__menu">
				<div 
					class="header__lang__menu__current"
					ref="currentLang"
					@click="handleToggleLangList()"
				>
					{{ $store.state.currentLang }} 
				</div>
				<div class="header__lang__menu__list" ref="langList">
					<div 
						class="header__lang__menu__list__item" 
						v-for="(lang, idx) in availableLangs"  
						v-bind:key="idx"
					> 
						{{ lang }} 
					</div>
				</div>
			</div>
		</div>
		<div 
			class="header__nav__menu"
			@click="handleToggleBurgerMenu()"
		>
			<div class="header__nav__menu__burger" ref="burgerMenu">
				<div class="header__nav__menu__burger__item"></div>
				<div class="header__nav__menu__burger__item"></div>
				<div class="header__nav__menu__burger__item"></div>
			</div>
			<div class="header__nav__menu__text">
				Меню
			</div>
		</div>
		<div class="header__right__part">
			<a class="header__payments__link link">
				<span>Платежі та перекази</span>
			</a>
			<div class="header__login__btn">
				<span>Увійти</span>
				<LoginIcon />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Logo from '../assets/icons/logo.png';
import LoginIcon from '../assets/icons/login-icon.svg';
import { Component, Vue } from 'vue-property-decorator';


@Component<any>({
	components: {
		LoginIcon,
	},
})
export default class Header extends Vue {
	$refs!: {
		langList: HTMLDivElement,
		currentLang: HTMLDivElement,
		burgerMenu: HTMLDivElement
	}
	
	logo: any = Logo;
	availableLangs: string[] = this.$store.getters.getAvailableLangs;
 
	closeLangList = (e: MouseEvent) => {
		let langList = document.querySelector('.header__lang__menu__list');
		let currentLang = document.querySelector('.header__lang__menu__current');

		if (e.target && e.target !== langList && e.target !== currentLang ) {
			if (langList && langList.classList.contains('opened')) {
				langList.classList.remove('opened');
			}
			if (currentLang && currentLang.classList.contains('opened')) {
				currentLang.classList.remove('opened');	
			}
		}
	}
 
	handleToggleLangList = () => {
		this.$refs.langList.classList.toggle('opened');
		this.$refs.currentLang.classList.toggle('opened');

		if (this.$refs.langList.classList.contains('opened')) {
			document.addEventListener('click', this.closeLangList); 
		}
	}

	handleToggleBurgerMenu = () => {
		this.$refs.burgerMenu.classList.toggle('opened');
	}
}

</script>
