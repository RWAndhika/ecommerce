<template>
    <!-- <div :style="[section == 'men\'s clothing' ? {'background-color': '#D6E6FF'} : {'background-color': '#FDEFFF'}]" class="background"> -->
    <div :class="sectionClass">
        <div v-if="available">
            <div class="card">
                <div class="container">
                    <div class="row-wrapper">
                        <div class="column-wrapper">
                            <img class="image" :src="item.image">
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
                                            <span class="dot"></span>
                                            <span class="dot"></span>
                                            <span class="dot"></span>
                                            <span class="dot"></span>
                                            <span class="dot"></span>
                                        </div>
                                    </div>
                                    <hr>
                                    <div :style="[item.description.length > 500 ? {'font-size': '24px'} : {'font-size': '28px'}]" class="description">
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
</template>

<script>

export default {
    name: 'WomenSection',
    data() {
        return {
            section: '',
            item :  {
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
            available: 1,
            firstDotClass: 'dot',
            secondDotClass: 'dot',
            thirdDotClass: 'dot',
            fourthDotClass: 'dot',
            fifthDotClass: 'dot'
        }
    },

    async beforeCreate() {
        const api = await fetch('https://fakestoreapi.com/products/1')
        const item = await api.json()
        this.item = item
    },

    methods: {
        nextItem() {
            if (this.clickCount == 20) this.clickCount = 0
            this.clickCount++
            this.callItemApi()
        },
        async callItemApi() {
            const api = await fetch('https://fakestoreapi.com/products/' + this.clickCount)
            const item = await api.json()
            
            if (item.category == "men's clothing" || item.category == "women's clothing") {
                this.item = item
                this.section = item.category
                console.log(item)
                this.available = 1
            } else {
                this.section = 'unavailable'
                this.available = 0
            }

            if (this.section == "men's clothing") {
                this.backgroundClass = 'background-men'
            } else if (this.section == "women's clothing") {
                this.backgroundClass = 'background-women'
            } else {
                this.backgroundClass = 'background'
            }
        }
    }
}

</script>

<!-- <style>
.title-text {
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
}

img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
    margin-top: 50px;
}

.title {
    color: #720060;
    font-family: Inter;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-align: left;
}

.card {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
}
.container {
    padding: 20px 70px;
    text-align: center;
    width: 80%;
    height: 700px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.row {
    display: flex;
}

.column-2 {
    position: relative;
    flex: 50%;
}

.column:first-child {
    flex: 25%;
}

.type {
    display: flex;
}

.gender {
    flex: 1;
    text-align: left;
    color: #3F3F3F;
    font-family: Inter;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.rating {
    color: #3F3F3F;
    font-family: Inter;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.price {
    text-align: left;
    color: #720060;
    font-family: Inter;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 15px;
}

.description {
    flex-shrink: 0;
    color: #1E1E1E;
    font-family: Inter;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: left;
}

.dot {
  height: 25px;
  width: 25px;
  background-color: #bbb;
  border-radius: 50%;
  vertical-align: middle;
  display: inline-block;
  margin-right: 3px;
}

.buttons {
    display: flex;
    justify-content: space-between;
}

.buy-now {
    width: 100%;
    height: 52px;
    border-radius: 4px;
    border: 3px solid #720060;
    background: #720060;
    margin-right: 10px;
    color: #FFF;
    font-family: Inter;
    font-size: 35px;
    align-items: center;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    display: flex;
    flex-direction: column;
}

.next-item {
    width: 100%;
    height: 52px;
    border-radius: 4px;
    border: 3px solid #720060;
    background: #FFF;
    color: #720060;
    font-family: Inter;
    font-size: 35px;
    align-items: center;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    display: flex;
    flex-direction: column;
}

.bottom-text {
    position: absolute;
    bottom: 0; 
    min-width: 100%;
}
</style> -->