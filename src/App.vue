<template>
	<div id="app">
		<Header />
		<IntroScreen />
		<CreditCalculator />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './views/Header.vue';
import IntroScreen from './views/IntroScreen.vue';
import CreditCalculator from './views/CreditCalculator.vue';
import './sass/main.scss';

@Component({
	components: { 
		Header,
		IntroScreen,
		CreditCalculator
	},
}) 
export default class App extends Vue {}
</script>
