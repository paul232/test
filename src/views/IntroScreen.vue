<template>
	<div class="intro__screen">
		<div class="intro__screen__inner container">
			<div class="intro__screen__inner__info">
				<div class="intro__screen__inner__info__title">
					Оплата частинами для власників кредитних карток
				</div>
				<div class="intro__screen__inner__info__subtitle">
					Скористайтесь коштами на кредитній картці на вигодніших умовах, зробіть звичайні дні незабутніми!
				</div>
				<div class="intro__screen__inner__info__action primary__btn">
					<span>Замовити послугу</span>
				</div>
				<div class="intro__screen__inner__info__link link">
					<ArrowLeft />
					<span>Кредитні картки</span>
				</div>
			</div>
			<div class="intro__screen__inner__img">
				<img :src="IntroImage" />
			</div>
		</div>
	</div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ArrowLeft from '../assets/icons/arrow-left.svg';
import IntroScreenImg from '../assets/icons/intro-screen-img.png';

@Component<any>({
	components: {
		ArrowLeft,
	}
})
export default class IntroScreen extends Vue {
	IntroImage = `.${IntroScreenImg}`;
} 

</script>