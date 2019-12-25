<template>
	<div class="credit__calculator container">
		<div class="credit__calculator__title">Розрахуйте свої умови кредитування</div>
		<div class="credit__calculator__action__container">
			<div class="credit__calculator__action__container__options">
				<div class="credit__calculator__action__container__amount">
					<div class="credit__calculator__action__container__amount__title">Сума покупки</div>
					<div class="credit__calculator__action__container__amount__field">
						<input 
							type="number"
							:value="+this.$store.state.creditCalculator.amount"
							@input="handleSetAmount"
							:min="minAmount"
							:max="maxAmount"
						>
						<div class="credit__calculator__action__container__amount__field__currency">грн</div>
					</div>
					<div class="credit__calculator__action__container__amount__range">
						<input 
							type="range"
							min="5"
							max="50"
						>
						<div class="credit__calculator__action__container__amount__range__min">5 тыс.</div>
						<div class="credit__calculator__action__container__amount__range__max">50 тыс.</div>
					</div>
				</div>
				<div class="credit__calculator__action__container__payments__number">
					<div class="credit__calculator__action__container__payments__number__title">Кількість платежів {{ $store.state.creditCalculator.paymentsNumber }} </div>
					<div class="credit__calculator__action__container__payments__number__list">
						<div class="credit__calculator__action__container__payments__number__list__item" @click="handleSetPaymentsNumber(6)">6</div>
						<div class="credit__calculator__action__container__payments__number__list__item" @click="handleSetPaymentsNumber(12)">12</div>
						<div class="credit__calculator__action__container__payments__number__list__item" @click="handleSetPaymentsNumber(24)">24</div>
					</div>
				</div>
			</div>
			<div class="credit__calculator__action__container__result">
				<div class="credit__calculator__action__container__result__title">Щомісячний платіж</div>
				<div class="credit__calculator__action__container__result__payment">
					<div class="credit__calculator__action__container__result__payment__value"></div>
					<div class="credit__calculator__action__container__result__payment__currency">ГРН</div>
				</div>
				<div class="credit__calculator__action__container__result__action primary__btn">
					<span>Замовити</span>
				</div>
			</div>
		</div>
	</div>
</template>

 

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';

export default class CreditCalculator extends Vue {
 
	minAmount: number = this.$store.state.creditCalculator.minAmount;
	maxAmount: number = this.$store.state.creditCalculator.maxAmount;

	handleSetPaymentsNumber = (value: number) => {
		this.$store.dispatch('creditCalculator/setPaymentsNumber', value);
	}

	handleSetAmount = (e: Event) => { 
		const target = e.target as HTMLInputElement;
		if (target && +target.value >= this.minAmount && +target.value <= this.maxAmount) {
			this.$store.dispatch('creditCalculator/setAmount', +target.value);
		} 
	}

}

</script>