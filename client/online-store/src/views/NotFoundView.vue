<template>
    <div class="notfound container">
        <div class="notfound__body">
            <img class="notfound__image" src="../assets/error.png" alt="">
            <div class="notfound__desc">
                <p>Упс, кажется страница, которую вы просматриваете не существует</p>
            </div>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.notfound {
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;

    &__body{
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    }

    &__image{
        width: 50%;
    }
}

.notfound p {
    font-size: 24px;
    border-bottom: 1px solid black;
}
</style>