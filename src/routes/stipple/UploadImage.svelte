<script lang="ts">
  import { uploadImage } from './db/upload';

  function onchange(event: Event) {
    const input = event.target as HTMLInputElement;
    for (let file of input.files || []) {
      uploadImage(file);
    }
  }
</script>

<input class="w-full border p-10" type="file" {onchange} />
