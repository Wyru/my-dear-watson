/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', (event) => {
  const commentEl = document.getElementById('comment');
  const voiceEl = document.getElementById('voice');
  const commentsContainerEl = document.getElementById('commentsContainer');

  const listen = async (id) => {
    const voice = voiceEl.value;
    try {
      const audio = await axios.get(`http://localhost:3333/api/comments/${id}/synthesize`,
        {
          params: {
            voice: voiceEl.value
          },
          responseType: 'blob'
        }
      );

      const blob = new Blob([audio.data], { type: 'audio/wav' });
      const url = window.URL.createObjectURL(blob);

      window.audio = new Audio();
      window.audio.src = url;
      window.audio.play();
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops... Alguma coisa deu errado!',
        text: error.toString()
      });
    }
  };

  const deleteComment = async (id) => {
    try {
      await axios.delete(`http://localhost:3333/api/comments/${id}`);
      updateComments();
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops... Alguma coisa deu errado!',
        text: error.toString()
      });
    }
  };

  const updateComments = async () => {
    try {
      const result = await axios.get('http://localhost:3333/api/comments');

      commentsContainerEl.innerHTML = '';

      result.data.data.forEach(comment => {
        commentsContainerEl.innerHTML += `
              <div class="comment">
                <div class="text">
                  "${comment.text}"
                </div>
                <button class="playButton" data-id="${comment.id}">
                  <i class="far fa-play-circle"></i> <div>Ouvir</div>
                </button>
                <div class="delete" data-id="${comment.id}">
                  <i class="fas fa-trash-alt"></i>
                </div>
              </div >
              `;
      });

      const playButtons = Array.from(document.getElementsByClassName('playButton'));

      playButtons.forEach(btn => {
        const text = btn.getAttribute('data-id');
        btn.onclick = () => {
          listen(text);
        };
      });

      const deleteButtons = Array.from(document.getElementsByClassName('delete'));

      deleteButtons.forEach(btn => {
        const id = btn.getAttribute('data-id');
        btn.onclick = () => {
          deleteComment(id);
        };
      });
    } catch (error) {
      console.log(error);
    }
  };

  const createComment = async (comment) => {
    try {
      await axios.post('http://localhost:3333/api/comments', { text: comment });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops... Alguma coisa deu errado!',
        text: error.toString()
      });
    }
  };

  document.getElementById('createComment').onclick = async () => {
    const comment = commentEl.value;
    if (comment.length > 0) {
      await createComment(comment);
    }
    commentEl.value = '';
    updateComments();
  };

  updateComments();
});
