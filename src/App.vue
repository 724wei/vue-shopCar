<template>
  <div>
    <ChildVue title="用户名">
      <template #content>
        <input type="text" name="" id="" />
      </template>
    </ChildVue>
    <ChildVue title="密码">
      <template #content>
        <input type="password" name="" id="" />
      </template>
    </ChildVue>
    <ChildVue title="性别">
      <template #content>
        <input type="radio" name="sex" id="" /> 男
        <input type="radio" name="sex" id="" /> 女
      </template>
    </ChildVue>
    <ChildVue title="爱好">
      <template #content>
        <input type="checkbox" name="" id="" />抽烟
        <input type="checkbox" name="" id="" />喝酒
        <input type="checkbox" name="" id="" />烫头
      </template>
    </ChildVue>
    <ChildVue title="来自于">
      <template #content>
        <select>
          <option value="beijing">北京</option>
          <option value="shanghai">上海</option>
          <option value="guangdong">广东</option>
        </select>
      </template>
    </ChildVue>
  </div>
</template>

<script>
import ChildVue from '@/components/ChildVue.vue'
export default {
  components: {
    ChildVue
  }
}
</script>

<style></style>
