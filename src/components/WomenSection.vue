<template>
    <div class="background">
        <div class="card">
            <div class="container">
                <div class="row-wrapper">
                    <div class="column-wrapper">
                        <img class="image" :src="image">
                    </div>
                    <div class="column-wrapper">
                        <div class="row-wrapper-vertical">
                            <div class="column-wrapper-vertical">
                                <div class="title">
                                    <p class="title-text"><b>Lock and Love Women's Removable Hooded Faux Leather Moto Biker
                                            Jacke</b></p>
                                </div>
                                <div class="type-row-wrapper">
                                    <div class="gender">women's clothing</div>
                                    <div class="rating">rating
                                        <span class="dot"></span>
                                        <span class="dot"></span>
                                        <span class="dot"></span>
                                        <span class="dot"></span>
                                        <span class="dot"></span>
                                    </div>
                                </div>
                                <hr>
                                <div class="description">
                                    <p>Lorem ipsum dolor sit amet. Ea consequatur quaerat et faLorem ipsum dolor sit amet.
                                        Ea
                                        consequatur quaerat et facercerLorem ipsum dolor sit amet. Ea consequatur quaerat et
                                        facerLorem ipsum dolor sit amet. Ea consequatur quaerat et facere dolor qui
                                        molestiae
                                        galisum et ullam velit aut soluta molestias.
                                        In iusto quia id itaque quae ut autem adipisci aut suscipit quibusdam ad culpa
                                        corporis
                                        ut nihil minima.
                                    </p>
                                </div>
                            </div>
                            <div class="column-wrapper-vertical">
                                <div class="bottom-text">
                                    <hr>
                                    <div class="price">$29.90</div>
                                    <div class="buttons">
                                        <button type="button" class="buy-now">Buy Now</button>
                                        <button type="button" class="next-item">Next Item</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import image from "../assets/jacket.png"

export default {
    name: 'WomenSection',
    data: function () {
        return {
            image: image
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