<template>
    <div v-if="isLoading">
        <div class="skeleton">
            <div class="container">
                <div class="row-wrapper">
                    <div class="column-wrapper">
                        <div class="skeleton-img"></div>
                    </div>
                    <div class="column-wrapper">
                        <div class="row-wrapper-vertical">
                            <div class="column-wrapper-vertical">
                                <div class="skeleton-title">
                                    <p></p>
                                </div>
                                <div class="type-row-wrapper">
                                    <div class="skeleton-gender"></div>
                                    <div class="skeleton-rating"></div>
                                </div>
                                <hr>
                                <p class="skeleton-description">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </p>
                            </div>
                            <div class="column-wrapper-vertical">
                                <div class="bottom-text">
                                    <hr>
                                    <div class="skeleton-rating"></div>
                                    <div class="skeleton-buttons">
                                        <button class="skeleton-buy-now" type="button" disabled></button>
                                        <button class="skeleton-next-item" type="button" disabled></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <div :class="sectionClass">
            <div v-if="available">
                <div class="card">
                    <div class="container">
                        <div class="row-wrapper">
                            <div class="column-wrapper">
                                <img class="card-img" :src="item.image">
                            </div>
                            <div class="column-wrapper">
                                <div class="row-wrapper-vertical">
                                    <div class="column-wrapper-vertical">
                                        <div class="title">
                                            <p class="title-text"><b>{{ item.title }}</b></p>
                                        </div>
                                        <div class="type-row-wrapper">
                                            <div class="gender">{{ item.category }}</div>
                                            <div class="rating">{{ item.rating.rate }}
                                                <span :class="firstDotClass"></span>
                                                <span :class="secondDotClass"></span>
                                                <span :class="thirdDotClass"></span>
                                                <span :class="fourthDotClass"></span>
                                                <span :class="fifthDotClass"></span>
                                            </div>
                                        </div>
                                        <hr>
                                        <div :style="[item.description.length > 500 ? { 'font-size': '24px' } : { 'font-size': '28px' }]"
                                            class="description">
                                            <p>{{ item.description }}</p>
                                        </div>
                                    </div>
                                    <div class="column-wrapper-vertical">
                                        <div class="bottom-text">
                                            <hr>
                                            <div class="price">${{ item.price }}</div>
                                            <div class="buttons">
                                                <button type="button" class="buy-now">Buy Now</button>
                                                <button @click="nextItem" type="button" class="next-item">Next Item</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="card">
                    <div class="container-unavailable">
                        <div class="comment-unavailable">This product is unavailable to show</div>
                        <button @click="nextItem" type="button" class="next-item-unavailable">Next Product</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'WomenSection',
    data() {
        return {
            isLoading: false,
            section: '',
            item: {
                id: '',
                title: '',
                price: '',
                rating: {
                    rate: '', count: ''
                },
                category: '',
                description: '',
                image: ''
            },
            clickCount: 1,
            sectionClass: 'section-unavailable',
            available: true,
            firstDotClass: 'dot',
            secondDotClass: 'dot',
            thirdDotClass: 'dot',
            fourthDotClass: 'dot',
            fifthDotClass: 'dot'
        }
    },
    methods: {
        ratingItem() {
            if (this.section == "men's clothing") {
                this.sectionClass = 'section-men'

                if (this.item.rating.rate >= 1) {
                    this.firstDotClass = 'dot dot-fill-men'
                } else {
                    this.fistDotClass = 'dot dot-men'
                }
                if (this.item.rating.rate >= 2) {
                    this.secondDotClass = 'dot dot-fill-men'
                } else {
                    this.secondDotClass = 'dot dot-men'
                }
                if (this.item.rating.rate >= 3) {
                    this.thirdDotClass = 'dot dot-fill-men'
                } else {
                    this.thirdDotClass = 'dot dot-men'
                }
                if (this.item.rating.rate >= 4) {
                    this.fourthDotClass = 'dot dot-fill-men'
                } else {
                    this.fourthDotClass = 'dot dot-men'
                }
                if (this.item.rating.rate == 5) {
                    this.fifthDotClass = 'dot dot-fill-men'
                } else {
                    this.fifthDotClass = 'dot dot-men'
                }

            } else if (this.section == "women's clothing") {
                this.sectionClass = 'section-women'

                if (this.item.rating.rate >= 1) {
                    this.firstDotClass = 'dot dot-fill-women'
                } else {
                    this.fistDotClass = 'dot dot-women'
                }
                if (this.item.rating.rate >= 2) {
                    this.secondDotClass = 'dot dot-fill-women'
                } else {
                    this.secondDotClass = 'dot dot-women'
                }
                if (this.item.rating.rate >= 3) {
                    this.thirdDotClass = 'dot dot-fill-women'
                } else {
                    this.thirdDotClass = 'dot dot-women'
                }
                if (this.item.rating.rate >= 4) {
                    this.fourthDotClass = 'dot dot-fill-women'
                } else {
                    this.fourthDotClass = 'dot dot-women'
                }
                if (this.item.rating.rate == 5) {
                    this.fifthDotClass = 'dot dot-fill-women'
                } else {
                    this.fifthDotClass = 'dot dot-women'
                }
            } else {
                this.sectionClass = 'section-unavailable'
                this.firstDotClass = 'dot'
                this.secondDotClass = 'dot'
                this.thirdDotClass = 'dot'
                this.fourthDotClass = 'dot'
                this.fifthDotClass = 'dot'
            }
        },
        nextItem() {
            if (this.clickCount == 20) this.clickCount = 0
            this.clickCount++
            this.callItemApi()
        },
        async callItemApi() {
            this.isLoading = true
            const api = await fetch('https://fakestoreapi.com/products/' + this.clickCount)
            const item = await api.json()

            if (item.category == "men's clothing" || item.category == "women's clothing") {
                this.item = item
                this.section = item.category
                console.log(item)
                this.available = true
            } else {
                this.section = 'unavailable'
                this.available = false
            }
            this.ratingItem()
            this.isLoading = false
        },
    },
    async mounted() {
        this.callItemApi()
    }
}
</script>