let count = 0;

export default {
  __setCount(_count) {
    count = _count;
  },
  async getNotifications() {
    console.warn('Good job, using mock service');
  return {count};
  }

}