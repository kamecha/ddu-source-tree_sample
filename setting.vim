" set rtpの箇所は各自の環境に応じて変更する必要あり
set rtp+=~/.cache/dein/nvim/repos/github.com/vim-denops/denops.vim
set rtp+=~/.cache/dein/nvim/repos/github.com/Shougo/ddu.vim
set rtp+=~/.cache/dein/nvim/repos/github.com/Shougo/ddu-ui-ff
set rtp+=~/workspace/Plugin/ddu-source-tree_sample

nnoremap <Leader>u <Cmd>call ddu#start(#{
			\ ui: 'ff',
			\ sources: ['sample']
			\})<CR>
