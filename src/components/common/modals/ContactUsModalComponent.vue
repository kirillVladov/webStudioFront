<script lang="ts" setup>
import ModalWindowComponent from "../ModalWindowComponent.vue";
import {useModalStore} from "../../../stores/modal";
import DropdownComponent from "../DropdownComponent.vue";
import InputFieldComponent from "../InputFieldComponent.vue";
import {ref} from "vue";
import SocialsListComponent from "../SocialsListComponent.vue";
import ContactUsTypes from "../../../mocks/landing/ContactUsTypes";
import TextAreaComponent from "../TextAreaComponent.vue";
import ButtonComponent from "../ButtonComponent.vue";

const modalStore = useModalStore();
</script>

<template>
        <modal-window-component
            name="contactUs"
            class="contact-us-modal"
        >
            <div class="contact-us-modal__contacts">
                <div class="contact-us-modal__contacts__email">
                    <div class="contact-us-modal__contacts__email-title">
                        Email us
                    </div>
                    <div class="contact-us-modal__contacts__email-value">
                        Email@mail.com
                    </div>
                </div>
                <div class="footer__socials">
                    <div class="contact-us-modal__contacts__socials-title">
                        Follow
                    </div>
                    <div class="contact-us-modal__contacts__socials-value">
                        <socials-list-component />
                    </div>
                </div>
            </div>
            <div class="contact-us-modal__form">
                <div class="contact-us-modal__form__header">
                    Hire us
                </div>
                <div class="contact-us-modal__form__description">
                    Any text about
                </div>
                <div class="contact-us-modal__form__view">
            <span class="contact-us-modal__form__type">
                <dropdown-component class-purple :list="ContactUsTypes" />
            </span>
                    <span class="contact-us-modal__form__name">
                <input-field-component placeholder="Enter your name" />
            </span>
                    <span class="contact-us-modal__form__email">
                <input-field-component placeholder="Enter your email address" />
            </span>
                    <span class="contact-us-modal__form__faq">
                <text-area-component placeholder="For answers and questions" />
            </span>
                </div>
                <div class="contact-us-modal__submit">
                    <button-component title="Submit" />
                </div>
            </div>
        </modal-window-component>
</template>

<style lang="scss">
    @import "src/style/common/modals/contact-us-modal";
</style>