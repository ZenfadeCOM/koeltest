<template>
  <span v-if="currentUser" id="userBadge" class="profile">
    <a class="view-profile" href="/#/profile" title="View/edit user profile">
      <img :alt="`Avatar of ${currentUser.name}`" :src="currentUser.avatar" class="avatar">
      <span class="name">{{ currentUser.name }}</span>
    </a>

    <a
      class="logout control"
      role="button"
      title="Log out"
      @click.prevent="logout"
    >
      <Icon :icon="faSignOutAlt" />
    </a>
  </span>
</template>

<script lang="ts" setup>
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { eventBus } from '@/utils'
import { useAuthorization } from '@/composables'

const { currentUser } = useAuthorization()

const logout = () => eventBus.emit('LOG_OUT')
</script>

<style lang="scss">
#userBadge {
  @include vertical-center();

  justify-content: flex-end;
  position: relative;

  .avatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: .5rem;
  }

  .view-profile {
    height: 100%;
    @include vertical-center();
  }

  .logout {
    height: 100%;
    padding: 0 1.25rem;
    @include vertical-center();
  }

  @media only screen and (max-width: 667px) {
    flex: 0 0 96px;
    margin-right: 0;
    padding-right: 0;
    align-content: stretch;

    .name {
      display: none;
    }

    .view-profile, .logout {
      flex: 0 0 40px;
      font-size: 1.4rem;
      margin-right: 0;

      @include vertical-center();
    }
  }
}
</style>
