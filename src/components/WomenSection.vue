<template>
    <div class="card">
        <div class="container">
            <div class="row">
                <div class="column">
                    <img :src="image">
                </div>
                <div class="column">
                    <div class="title">
                        <p><b>HALO</b></p>
                    </div>
                    <div class="type">
                        <div class="gender">wemen</div>
                        <div class="rating">rating</div>
                    </div>
                    <div class="description">
                        <p>Lorem ipsum dolor sit amet. Ea consequatur quaerat et facere dolor qui molestiae galisum et ullam velit aut soluta molestias.
                             In iusto quia id itaque quae ut autem adipisci aut suscipit quibusdam ad culpa corporis ut nihil minima.
                        </p>
                    </div>
                    <div class="price"></div>
                    <div class="button">
                        <button type="button" class="buy-now">Buy Now</button>
                        <button type="button" class="next-item">Next Item</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import image from "../assets/logo.png"

export default {
    name: 'WomenSection',
    data: function () {
        return {
            image: image
        }
    }
}
</script>

<style>

.card {
    align-content: center;
}
.container {
    text-align: center;
    width: 1034px;
    height: 580px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.row {
    display: flex;
}

.column {
    flex: 50%;
}
</style>