<template>
    <transition name="modal-fade">
        <div class="modal-overflow">
            <div class="modal-backdrop">
                <div class="modal-v" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
                    <header class="modal-header" id="modalTitle">
                        <slot name="header">
                            <button type="button" class="btn-close" @click="close" aria-label="Close modal">
                                x
                            </button>
                        </slot>
                    </header>
                    <section class="modal-body" id="modalDescription">
                        <slot name="body">
                        </slot>
                    </section>
                    <footer class="modal-footer">
                        <slot name="footer">
                        </slot>
                    </footer>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>

export default {
    name: 'modal-window',
    // setup(context){
    //     function close(){
    //         context.emit('close');
    //     }
    //     return {
    //         close
    //     }
    // },
    methods: {
        close() {
            this.$emit('close');
        },
    },
}
</script>

<style lang="scss">
td {
    border: 1px solid #ececec;
}

.modal-overflow {
 position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.4);
  display: block;
  overflow: hidden;
  z-index: 99;
  

}

.modal-backdrop {
    z-index: 999;
    width: max-content;
    min-height: 500px;
    display: flex;
    position: absolute;
    line-height: normal;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.modal-v {
    background: #FFFFFF;
    -webkit-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: 10px;

}

.modal-header,
.modal-footer {
    display: flex;

}

.modal-header {
    border-bottom: 1px solid #eeeeee;
    color: black;
    justify-content: flex-end;
}

.modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
}

.modal-body {
    padding: 10px;
    margin: 1rem 0;
}

.btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: black;
    background: transparent;
}

</style>