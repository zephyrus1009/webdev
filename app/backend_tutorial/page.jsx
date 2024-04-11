import React from 'react'
import { Image } from 'react-bootstrap'
import CodeSnippet from '@/components/CodeSnippet'
const backend_tutorial = () => {
  return (
    <div>
      <h1 className='my-4 text-center'>BACKEND TUTORIAL</h1>
      <div>
        <h2>CMS</h2>
        <ul>
          <li>CMS là viết tắt của Content Manage System</li>
          <li>Về cơ bản có thể chia làm 2 mảng là CMS (truyền thống) và Headless CMS</li>
          <li>CMS truyền thống thì chính là phần front end và toàn bộ phần back-end</li>
          <li>Headless CMS là hệ thống CMS mới, chỉ tập trung vào hỗ trợ quản lý dữ liệu, không quan tâm đến front-end (do đó mới gọi là headless).Còn app thì có thể tương tác đến phần dữ liệu được quản lý này thông qua call API.
            <Image fluid src='images/webdev/public/images/headless cms.png' />
          </li>
          <li>Một số Headless CMS phổ biến như: ButterCMS, Strapi, Drupal,... </li>
        </ul>
        <h2>GIT, GITHUB</h2>
        <h3>Giới thiệu về Git và Github</h3>
        <figure>
          <Image fluid src="images\git mindmap.jpg" alt="mindmap git" />
          <figcaption>Git Mindmap</figcaption>
        </figure>
        <ul>
          <li>
            Git là một chương trình dạng source control, tức là quản lý các
            phiên bản code kiểm soát xem code có thay đổi không, thay đổi ở đâu,
            ta có thể dễ dàng dùng phiên bản code nọ hoặc code kia.
          </li>
          <li>Git được ra đời vào năm 2005, tác giả là Linux Torvals</li>
          <li>
            Trong khi Git chạy local trên máy thì Github là một bước mở rộng,
            cung cấp khả năng remote giúp cho việc quản lý code khi làm việc
            nhóm, làm việc từ xa hiệu quả.
          </li>
          <li>
            Ta có thể dùng Git mà không cần Github, trong khi điều ngược lại là
            không thể. Ngoài Github thì còn có một số lựa chọn như GitLab,
            BitBucket. Tuy nhiên, Github được dùng phổ biến nhất.
          </li>
          <li>
            Thuật ngữ cơ bản nhất là repository, hay còn gọi là repo. Đây có thể
            hiểu là một vùng nhớ chứa code. Thường mỗi folder của một project ta
            sẽ biến thành một repo.
          </li>
        </ul>
        <p>
          Lưu ý: Các lệnh sau được gõ tại terminal. Khi cài Git vào máy sẽ có
          luôn GitBash, cũng là một dạng Shell.
        </p>
        <h3>Thiết lập cơ bản khi mới cài Git</h3>
        <ul>
          <li>
            Một trong các việc cần làm đầu tiên khi bắt đầu dùng Git đó là
            config username và useremail:
            <pre>
              <code>
                git config --global user.name "My Name"
                git config --global user.email "myemail@example.com"
              </code>
            </pre>
          </li>
        </ul>
        <h3>Các lệnh cơ bản:</h3>
        <ul>
          <li>
            Trong quá trình dùng, để biết ta đã config những gì (ví dụ username
            hay email) thì ta gõ:
            <pre>
              <code>git config --list</code>
            </pre>
            Nếu kẹt, muốn thoát ra thì gõ q hoặc tắt CLI đi bật lại.
          </li>
          <li>
            Để kiểm tra trạng thái, ví dụ như các file nào đang được track hay
            untrack,... thì ta dùng lệnh:
            <pre>
              <code>git status</code>
            </pre>
          </li>
          <li>
            Để xem lịch sử thay đổi code,... thì ta gõ:
            <pre>
              <code>git log</code>
            </pre>
          </li>
        </ul>
        <h3>Tạo Repository</h3>
        <p>Để có repo thì ta có 2 hướng:</p>
        <ul>
          <li>Hướng 1: Tạo 1 local repo từ một folder project có sẵn.</li>
          <li>Hướng 2: Clone một repo từ trên mạng về.</li>
        </ul>
        <h4>Hướng 1. Tạo 1 local repo từ một folder project có sẵn.</h4>
        <ul>
          <li>
            Khởi tạo một new repository: Khi đã cd đến folder cần biến thành
            repo, ta gõ:
            <pre>
              <code>git init</code>
            </pre>
            hoặc dùng giao diện thì chuột phải vào folder, chọn git bash here.
          </li>
          <li>
            Tuy nhiên, như vậy mới là khởi tạo, chưa có bất kỳ file nào trong
            folder được track (tất cả files trong folder đang là untrack).
          </li>
          <li>
            Khi muốn biến local repo thành remote repo (liên kết với remote repo
            trên Github) thì ta làm theo các bước như sau:
            <ul>
              <li>
                Đầu tiên, add remote repo (liên kết remote repo với local repo):
                <pre>
                  <code>git remote add remote_name remote_repo_url</code>
                </pre>
              </li>
              <li>
                Tiếp theo, để đẩy dữ liệu lên thì ta gõ:
                <pre>
                  <code>
                    git push -u remote_name local_branch_name
                  </code>
                </pre>
                Trong đó local branch name là nhánh branch nào đó mà ta muốn
                push data lên.
              </li>
            </ul>
          </li>
        </ul>
        <h4>Hướng 2: Clone một repo từ trên mạng về.</h4>
        <p>gõ lệnh:</p>
        <pre>
          <code>
            git clone url
          </code>
        </pre>
        <p>Ví dụ (nếu muốn đổi thành tên mới thì gõ tên ở sau URL):</p>
        <pre>
          <code>
            git clone https://github.com/libgit2/libgit2 mylibgit
          </code>
        </pre>
        <h3>Recording Changes to the Repository</h3>
        <figure>
          <Image fluid
            src="images\status lifecycle of a file.png"
            alt="status lifecycle of a file"
          />
          <figcaption>status lifecycle of a file</figcaption>
        </figure>
        <p>Hình trên là các trạng thái cơ bản của một file.</p>
        <ul>
          <li></li>
          <li>
            Một file untracked khi được add thì sẽ đến staged luôn (staged là
            trạng thái được ghi nhận, sẵn sàng để commit)
          </li>
          <li>
            unmodified và modified là những file đã tracked nhưng chưa staged
            (tức git chưa biết các file này có thay đổi gì hay không)
          </li>
          <li>Một file unmodified khi có thay đổi thì gọi là modified</li>
          <li>
            unmodified thì được track rồi, không có thay đổi gì nên không cần
            phải stage làm gì.
          </li>
          <li>
            Các file modified (có thay đổi) thì để stage nó cần chạy lệnh git
            add (Lệnh git add là lệnh multipurpose, vừa dùng để track file vừa
            để stage file). Lưu ý là version của file lúc chạy git add mới được
            ghi nhận, nếu đã git add mà sau đó lại sửa rồi mới commit thì việc
            sửa đó không được ghi nhận.
          </li>
          <li>
            Một file staged nếu như commit xong thì quay về trạng thái
            unmodified
          </li>
          <li>
            Một file nếu remove khỏi git (không quan tâm đến nó nữa) thì sẽ về
            trạng thái untracked.
          </li>
        </ul>
        <h4>git add</h4>
        <ul>
          <li>
            Để track file mới hoặc stage file modified thì ta dùng lệnh git add:
            <ul>
              <li>
                Để add một file ta gõ:
                <pre>
                  <code>git add tenfile</code>
                </pre>
              </li>
              <li>
                Để add nhiều file cùng đuôi, ta gõ:
                <pre>
                  <code>git add *.duoi</code>
                </pre>
                Ví dụ:
                <pre>
                  <code>git add *.html</code>
                </pre>
              </li>
              <li>
                Để add tất cả các file, ta gõ:
                <pre>
                  <code>git add .</code>
                </pre>
              </li>
            </ul>
          </li>
        </ul>
        <h4>Xem sự thay đổi ở các staged và unstaged file.</h4>
        <ul>
          <li>
            Vì lệnh git status chỉ liệt kê chung chung, nên ta cần một lệnh chi
            tiết hơn, git diff.
          </li>
          <li>
            Để show các sự thay đổi của file dạng modified (có thay đổi nhưng
            chưa staged) thì ta gõ:
            <pre>
              <code>git diff</code>
            </pre>
          </li>
          <li>
            Để show các sự thay đổi đã staged (sẵn sàng để commit) thì ta gõ:
            <pre>
              <code>git diff --staged</code>
            </pre>
            Hoặc
            <pre>
              <code>git diff --cached</code>
            </pre>
          </li>
        </ul>
        <h4>Commit file</h4>
        <ul>
          <li>
            Để commit thông thường thì ta gõ:
            <pre><code>git commit -m "ghi chu"</code></pre>
            Ví dụ:
            <pre>
              <code>git commit -m "Story 182: fix benchmarks for speed"</code>
            </pre>
          </li>
          <li>
            Để commit nhanh, auto stage tất cả các file đã track (tức bỏ qua
            phần lệnh git add) thì thêm -a:
            <pre>
              <code>git commit -a -m "chuthich"</code>
            </pre>
            Ví dụ:
            <pre>
              <code>git commit -a -m 'Add new benchmarks'</code>
            </pre>
          </li>
        </ul>
        <h4>Git ignoring file</h4>
        <ul>
          <li>
            Trong folder của project bao giờ cũng chứa nhiều file ta không muốn
            track (file hệ thống, file log, file thư viện) thì ta dùng
            .gitignores. Đây là một file mà trong đó ta sẽ viết tên các file hay
            folder ta không muốn track vào. Như vậy thì khi gõ git add . thì các
            file hay folder có tên trong .gitignore sẽ được bỏ qua.
          </li>
          <li>
            Vì file .gitignore bắt đầu bằng dấu . Do đó, ta phải tạo file này
            bằng cách tại terminal dùng lệnh touch hoặc tạo tại vs code.
          </li>
        </ul>
        <figure>
          <Image fluid src="images\gitignore rules.png" alt="gitignore file rules" />
          <figcaption>gitignore file rules</figcaption>
        </figure>
        <p>
          Các file gitignore mẫu có thể download tại
          <a href="https://github.com/github/gitignore">Github</a>
        </p>
        <h4>Xoá files khỏi Git (removing files)</h4>
        <p>Xoá files khỏi Git sẽ xảy ra các trường hợp sau:</p>
        <ul>
          <li>
            Lưu ý: Lệnh git rm xoá file khỏi staging area và đồng thời xoá file
            khỏi working directory (folder chứa file đó).
          </li>
          <li>Trường hợp 1: Dùng lệnh git rm ten-file để xoá file</li>
          <li>
            Trường hợp 2: Tự xoá file thủ công. Sau đó thì vẫn phải dùng lệnh
            git rm ten-file
          </li>
          <li>
            Trường hợp 3: File cần xoá đã được add vào staging area, hoặc đã
            được edit thì ta phải force delete bằng việc thêm vào lệnh git rm
            option -f. Làm vậy để đề phòng việc file chưa được record vào
            snapshot bị xoá mất thì không khôi phục lại được.
          </li>
          <li>
            Trường hợp 4: Chỉ muốn xoá file khỏi staging area (làm cho file
            untracked) chứ không xoá hẳn khỏi working directory. Ví dụ khi ta
            quên không thêm file vào .gitignore và đã track nó. Thêm option
            --cached:
            <pre>
              <code>git rm --cached README</code>
            </pre>
          </li>
        </ul>
        <h4>Undoing things</h4>
        <ul>
          <li>
            Trường hợp 1: Commit xót file. Trường hợp này ta có thể commit lại.
            Tuy nhiên sẽ thành nhiều commit, không hay. Do đó, ta add thêm file
            cần commit, sau đó dùng lệnh commit --amend thì sẽ chỉ xuất hiện
            thành 1 commit mới, thay thế cho commit trước đó. Ví dụ:
            <pre>
              <code>$ git commit -m 'Initial commit'
                $ git add forgotten_file
                $ git commit --amend</code>
            </pre>
          </li>
          <li>
            Trường hợp 2: Bỏ bớt file khỏi trạng thái staging area. Ta dùng lệnh
            git restore --staged ten-file. Trong ví dụ dưới đây, giả sử có 2
            file đang ở trạng thái staged, ta sẽ dùng lệnh để bỏ bớt 1 file khỏi
            staging area thì sẽ thu được kết quả như ảnh:
            <figure>
              <Image fluid
                src="images\unstaging file.png"
                alt="use git reset to unstage file"
              />
              <figcaption>use git reset to unstage file.</figcaption>
            </figure>
          </li>
          <li>
            Trường hợp 3: Unmodifying a modified file. Ta dùng lệnh git restore
            tenfile. Lưu ý: Các phiên bản git cũ dùng lệnh git checkout. Cú
            pháp:
            <pre>
              <code>git restore tenfile</code>
            </pre>
          </li>
        </ul>
        <h3>Working with remote</h3>
        <h4>xem đang liên kết với những remotes nào</h4>
        <p>
          Ta có thể dùng lệnh git remote hoặc git remote -v (chi tiết hơn, thấy
          cả tên rút gọn, tên thay thế).
        </p>
        <h4>Để clone một remote từ trên mạng về ta dùng lệnh git clone.</h4>
        <pre>
          <code>
            git clone https://github.com/libgit2/libgit2 tenthaythe
          </code>
        </pre>
        <h4>Fetching and pulling data</h4>
        <ul>
          <li>
            Xem remote có những thay đổi gì về data (thực tế là có kéo data về,
            những ko thay đổi gì data local) gọi là fetching. Cấu trúc lệnh:
            <pre>
              <code>git fetch remote</code>
            </pre>
            Trong đó remote có thể là URL, có thể là tên thay thế, hoặc origin
            (vì khi ta clone một repository thì nó tự được coi là origin)
          </li>
          <li>Để fetch đồng thời merge luôn dữ liệu thì dùng git pull.</li>
        </ul>
        <h4>Đẩy dữ liệu lên remote (push data)</h4>
        <p>Cấu trúc lệnh:</p>
        <pre>
          <code>git push ten-remote ten-branch</code>
        </pre>
        <h4>rename hoặc xoá một remote</h4>
        <p>Lưu ý: đây là các thao tác chỉ ảnh hưởng đến local.</p>
        <ul>
          <li>
            rename một remote. Giả sử ta đã clone một remote và đặt tên khác cho
            nó là pb, bây giờ ta muốn đổi tên này thành paul thì ta làm như sau:
            <pre>
              <code>git remote rename pb paul</code>
            </pre>
          </li>
          <li>
            Nếu ta muốn remove nó thì ta dùng git remote remove hoặc git remote
            rm. Ví dụ:
            <pre><code>
              git remote rm paul
            </code></pre>
          </li>
        </ul>
        <h3>
          <a
            href="https://www.atlassian.com/git/tutorials/using-branches?section=git-branch"
          >Git branch</a
          >
        </h3>
        <figure>
          <Image fluid src="images\git branch.png" alt="git branch" />
          <figcaption>Git branch</figcaption>
        </figure>
        <ul>
          <li>
            Tạo branch là việc cần thiết khi ta muốn thử code mới, thêm tính
            năng,... mà không ảnh hưởng trực tiếp đến code cũ đang hoạt động ổn
            định.
          </li>
          <li>
            Khi đã test nhánh branch thấy ổn định thì mới merge vào nhánh cũ.
          </li>
          <li>
            List ra các branch đang có:
            <pre>
              <code>git branch</code>
            </pre>
          </li>
          <li>
            Tạo một branch mới:
            <pre>
              <code>git branch ten-branch</code>
            </pre>
          </li>
          <li>
            Xoá branch (branch unmerged thì không xoá được):
            <pre>
              <code>git branch -d ten-branch</code>
            </pre>
          </li>
          <li>
            Xoá branch (kể cả các branch unmerged):
            <pre>
              <code>git branch -D ten-branch</code>
            </pre>
          </li>
          <li>
            Đổi tên branch hiện tại thành ten-branch:
            <pre>
              <code>git branch -m ten-branch</code>
            </pre>
          </li>
        </ul>
        <p>Ví dụ về việc tạo branch:</p>
        <figure>
          <Image fluid
            src="images\before creating branch.png"
            alt="before creating branch"
          />
          <figcaption>Before creating branch</figcaption>
        </figure>
        <p>Tạo branch với tên crazy-experiment:</p>
        <pre>
          <code>git branch crazy-experiment</code>
        </pre>
        <figure>
          <Image fluid
            src="images\after creating branch.png"
            alt="after creating branch"
          />
          <figcaption>After creating branch</figcaption>
        </figure>
        <p>
          Nếu như repo đang chứa branch đã được liên kết với remote repo thì ta
          cũng có thể đẩy local branch này lên remote:
        </p>
        <pre>
          <code>git push remote-repo crazy-experiment~</code>
        </pre>
      </div>

      <div>
        <h2>TERMINAL, SHELL</h2>
        <ul>
          <li>
            Terminal ban đầu là thuật ngữ dùng để chỉ cổng vật lý giúp kết nối
            với máy tính.
          </li>
          <li>
            Ngày nay, thuật ngữ này vẫn dùng để chỉ cổng (interface để nhập
            lệnh) giúp kết nối với máy tính (giúp người sử dụng tương tác với
            máy tính). Tuy nhiên, không còn là cổng vật lý mà đã chuyển sang
            phần mềm.
          </li>
          <li>
            Terminal là cơ bản nhất, chỉ có 1. Còn shell là thuật ngữ chỉ các
            chương trình cao cấp hơn được viết và hoạt động trên terminal. Nó
            cũng giúp người dùng tương tác với máy tính, nhưng vì cao cấp hơn
            nên có cung cấp các câu lệnh phức tạp hơn, mạnh hơn.
          </li>
          <li>
            Có nhiều chương trình shell khác nhau, có tên khác nhau. Ví dụ trên
            mac có zsh, bash. Trên windows có Shell. Khi cài git thì có gitbash.
          </li>
        </ul>
        <ul>
          <li>pwd trả về path (vị trí hiện tại)</li>
          <li>
            Chuyển thư mục: cd ten
            <code>cd Desktop</code>
          </li>
          <li>Dùng Tab để có gợi ý về các tên theo chữ cái đang gõ</li>
          <li>Muốn back: cd ..</li>
          <li>Liệt kê file trong folder hiện tại: dir hoặc ls</li>
          <li>
            Muốn liệt kê riêng một loại file đuôi nào đó: dir *loaifile
            <code>dir *jpg</code>
          </li>
          <li>
            Mỗi lệnh đều có option kèm theo. Ví dụ lệnh sau với option /? sẽ mở
            help về lệnh đó:
            <code>dir /?</code>
          </li>
          <li>
            Trong shell thì thay vì dùng /? sau lệnh thì ta dùng man tenlenh để
            xem giải thích lệnh. man là viết tắt của manual
            <code>man cd</code>
          </li>
          <li>xoá màn hình: cls</li>
          <li>tạo folder: mkdir ten <code>mkdir Bean</code></li>
          <li>
            xoá folder (empty): rmdir ten
            <code>rmdir Document</code>
          </li>
          <li>
            xoá folder không empty:
            <code>rmdir /s ten</code>
          </li>
          <li>Bấm up hoặc down để chuyển nhanh các lệnh đã gõ</li>

          <li>
            Có thể truy cập trực tiếp đến vị trí nào đó thông qua việc gõ path:
            <CodeSnippet code={`C:\Users\Bee\Downloads>cd C:\Users\Bee`} />

          </li>
          <li>
            Tuy nhiên, nếu path có chứa folder mà tên có dấu cách thì ta cho cả
            path vào ""
            <CodeSnippet code={`C:\Users\Bee\Downloads>cd "C:\Users\Bean thoi"`} />
          </li>
          <li>Muốn về root (dùng absolute path) thì gõ cd / hoặc cd \</li>
          <li>
            Gõ thẳng tên file mà không có lệnh đằng trước thì sẽ mở file đó bằng
            chương trình default, hoặc nếu là file exe thì nó sẽ chạy.
          </li>
          <li>
            Khi ta gõ thẳng tên file như vậy thì windows sẽ tìm file đó trong
            folder hiện tại. Nếu như không có ở folder hiện tại thì nó sẽ tìm
            trong path. path là biến chứa các đường dẫn mà ta gán để windows tìm
            kiếm. Như vậy, muốn chạy một chương trình hay mở file từ bất kỳ vị
            trí nào mà không phải mở hẳn folder chứa nó ra thì ta thêm đường dẫn
            của nó vào path. Để thêm vào path thì ta vào setting/
            system/about/advanced system setting/advanced/environment variables
            và thêm path vào phần path của user variables. Lưu ý: Các path cách
            nhau bởi dấu ;
          </li>
          <li>
            Muốn chuyển sang ổ khác (ví dụ từ ổ C sang ổ D) thì chỉ cần gõ tên ổ
            và dấu:
            <CodeSnippet code={`C:\Users\Bee>D:`} />
          </li>
          <li>
            Đổi màu font và màu chữ trong terminal bằng lệnh color. color ab với
            a là màu background, b là màu chữ. Muốn biết a b là bao nhiêu thì
            vào help: color /?. Muốn về default thì gõ color không thêm gì hết.
          </li>
          <li>
            Muốn xem attribute (hidden, readonly,..) thì tại parent folder gõ
            attrib sẽ ra thuộc tính của các files bên trong folder đó.
          </li>
          <li>
            Muốn chỉnh sửa thuộc tính của file nào thì cũng tại parent folder đó
            code theo cú pháp: + là thêm, - là bớt. VD:
            <code>C:\Users\Bee +h abcd.txt</code>
            Trong đó, h là thuộc tính hidden muốn thêm, abcd.txt là file muốn
            thêm thuộc tính. Xem help của attrib để biết chi tiết.
          </li>
          <li>
            Muốn xoá một file dùng lệnh del. Vd:
            <code>C:\Users\Bee del abcd.txt</code>
          </li>
          <li>
            Muốn xem nội dung của một file text thì dùng lệnh type. Vd:
            <code>C:\Users\Bee type abcd.txt</code>
          </li>
          <li>
            Muốn ghi kết quả của một câu lệnh vào file thì sau câu lệnh thêm:
            <CodeSnippet code={`> tenfile`} />
            Lưu ý: File ở đây có thể là chưa tồn tại thì sẽ tạo ra file
            mới. Ví dụ:
            <CodeSnippet code={`C:\Users\Bee dir > abcd.txt`} />
          </li>
          <li>
            Muốn ghi một dòng nào vào file thì dùng:
            <CodeSnippet code={`echo > noidung tenfile`} />
            hoặc
            <CodeSnippet code={`echo >> noidung tenfile`} />
            . Trường hợp <CodeSnippet code={`>`} /> là ghi đè, còn <CodeSnippet code={`>>`} /> là thêm vào.
            Vd:
            <CodeSnippet code={`C:\Users\Bee echo abcdef >> abcd.txt`} />
            Đây cũng là cách tạo ra một new file với nội dung nào đó.
          </li>
          <li>
            Muốn tạo một file mới empty (có thể là txt hoặc docx, png, rft) thì
            gõ:
            <CodeSnippet code={`type nul > filename.txt`} />
            Lưu ý:
            <ul>
              <li>Có thể dùng lệnh echo.</li>
              <li>tên file nếu có dấu cách thì mới cần đưa vào ""</li>
              <li>
                Dùng lệnh echo với type thì có thể báo lỗi ở CLI nhưng vẫn tạo
                file thành công.
              </li>
            </ul>
          </li>
          <li>
            Muốn copy thì dùng lệnh xcopy
            <pre><code>C:\Users\Bee xcopy a1 a2 /*copy files từ folder a1 sang folder a2 */</code></pre>
            <pre><code><code>C:\Users\Bee xcopy a1 a2 /s /*copy tất files gồm cả subdirectory */</code></code></pre>
          </li>
          <li>
            Muốn move hẳn thì dùng move:
            <pre><code><code>C:\Users\Bee move a1 a2 /*cả folder a1 sẽ nhảy vào a2 */</code></code></pre>
          </li>
          <li>
            Muốn đổi tên thì dùng lệnh rename:
            <pre><code><code>C:\Users\Bee rename a1 a3 /*rename a1 thành a3 */</code></code></pre>
          </li>
          <li>
            List file trong folder ra file text với powershell:
            <CodeSnippet code={`Get-ChildItem -Include *.doc,*.docx -File -Recurse -ErrorAction SilentlyContinue | Select-Object FullName > filelist.txt`} />
            <p>Lưu ý: *.doc, *.docx là ví dụ về file types mong muốn liệt kê</p>
          </li>
        </ul>
      </div>


      <div>
        <h2>NODEJS</h2>
        <h3>Giới thiệu</h3>
        <ul>
          <li>
            NODEJS là một platform dùng để hỗ trợ việc chạy JS bên ngoài web
            browser. Nhờ đó, ta có thể dùng javascript trong các việc liên quan
            đến backend.
          </li>
          <li>
            NodeJS được dùng trong nhiều việc khá nhau như: Web server, native
            apps, games, ...
          </li>
          <li>
            Trong môi trường Node thì có điểm khác biệt với web browser như:
            Node không có DOM; Node có sẵn các module hỗ trợ tương tác với hệ
            điều hành và file, folder...
          </li>
        </ul>
        <h3>Làm việc với Node</h3>
        <ul>
          <li>
            Ở terminal gõ node để vào môi trường làm việc của node (node repl)
          </li>
          <li>Muốn thoát ra khỏi môi trường này thì gõ .exit</li>
          <li>
            Nếu không muốn vào node repl mà muốn chạy một file nào đó trong môi
            trường node thì tại termianl đang ở địa chỉ folder chứa file, ta gõ:
            node tenfile
          </li>
        </ul>
      </div>

      <div>
        <h2>NPM (Node packages manager)</h2>
        <h3>Giới thiệu</h3>
        <ul>
          <li>
            NPM, viết tắt của Node Packages Manager, giống tên gọi của nó, là một trình quản lý các package Javascript. Nó vừa giúp lưu trữ các package được các dev viết ra và up lên, vừa giúp các user khác tải các package đó về theo đúng version mong muốn, quản lý project của user đang gồm các package nào, version bao nhiêu...
          </li>
          <li>NPM gồm 2 phần chính:
            <ol>
              <li>CLI (command line interface) là một giao diện gõ lệnh giúp download hoặc upload các packages</li>
              <li>Một online repository có địa chỉ tại <a href="https://www.npmjs.com/">trang chủ của NPM</a> giúp lưu trữ các packages.</li>
            </ol>
          </li>
          <li>Khi cài Node là đã tự cài NPM.</li>
        </ul>
        <figure>
          <Image fluid src="images\how npm works.png" alt="how npm works" />
          <figcaption>How NPM works</figcaption>
        </figure>

        <h3>package.json</h3>
        <ul>
          <li>
            Một project nodejs thường được built dựa trên nhiều packages. Do đó,
            cần có một sự thống kê, quản lý để biết là project đó chứa những
            packages nào, version bao nhiêu.
          </li>
          <li>
            package.json làm nhiệm vụ này, nó là một file dạng json. Nhờ có file
            này mà npm biết phải cài những packages nào phụ vụ project.
          </li>
          <li>Trong file package.json có các phần thông tin cơ bản sau:
            <ul>
              <li>Phần 1 chứa các thông tin cơ bản của project, ta sẽ điền hoặc cho máy tự điền theo mặc định khi tạo file package.json
                <Image fluid src="images\basic-info-packagejson.png" alt="basic info of package.json file" /> </li>
              <li>Phần thứ 2 là npm scripts. Phần script này sẽ hỗ trợ chạy command-line tools. Phiên bản gần đây giới thiệu thêm cả npx. Nhìn chung ta không cần quan tâm đến phần này lắm.
                <Image fluid src="images\npm script.png" alt="npm script" />
              </li>
              <li>Phần cuối là dependencies và devDependencies. Cả dependencies và devDependencies đều chứa thông tin về các package được cài trong project với format dạng key-value (tên package - phiên bản). Sự khác nhau cơ bản giữa dependencies và devDependencies là dependencies chứa các package thực sự cần thiết để chạy được project (tức xét từ phía production) còn devDependencies sẽ chỉ chứa các package hỗ trợ cho quá trình dev, mà không nhất thiết phải có để chạy được project (ví dụ prettier,...). Thông tin của package nằm ở dependencies hay devDependencies hoàn toàn do ta quyết định khi cài package với các lệnh:
                <ul>
                  <li>npm install cài vào dependencies</li>
                  <li>npm install --only=dev hoặc npm install -D sẽ chỉ cài vào devDependencies</li>
                </ul>
                <Image fluid src="images\dependencies and devDependencies.png" alt="dependencies and devDependencies" />
                <Image fluid src="images\cach doc version package.png" alt="cach doc package version" />
              </li>
            </ul>
          </li>
          <li>
            Có nhiều dạng thông tin trong file package.json, tuy nhiên quan
            trọng nhất là thông tin về các packages cần có (dependencies).
          </li>
          <li>
            Nội dung của file package.json phải tuân theo chuẩn. Do đó, ta cũng
            dùng lệnh để tạo nó chứ không tạo thủ công.
          </li>
          <li>Nếu clone lại project nào đó, thì project đó đã có sẵn file package.json thì ta chỉ cần gõ npm install là sẽ tự cài các package cho ta theo file package.json có sẵn. Lưu ý: Dùng npm install --production để cài cho production environment, dùng npm ci để cài cho dev environment.</li>
          <li>Khi khởi tạo project mới, trước khi cài các package thì ta phải gõ npm init để khởi tạo (tạo file package.json)</li>
          <li>
            Gõ như sau thì sẽ hiện giao diện giúp ta từng bước tạo package.json:
            <pre>
              <code>
                npm init
              </code>
            </pre>
            Gõ như sau sẽ tạo package.json nhanh với các thông tin dùng mặc định
            luôn (ví dụ tên,...):
            <pre>
              <code>npm init --yes</code>
            </pre>
          </li>
          <li>
            Khi tạo project nodejs mới thì bước tạo file package.json này phải
            được thực hiện đầu tiên để về sau cài các packages thì có thể lưu
            thông tin vào file này.
          </li>
        </ul>
        <h3>Cài đặt packages với NPM</h3>
        <ul>
          <li>
            Để cài package thì gõ:
            <pre><code>npm i tenpackage</code></pre>
            hoặc
            <pre><code>npm install tenpackage</code></pre>
          </li>
          <li>
            Để cài packages dạng global thì thêm -g:
            <pre><code>npm i -g tenpackage</code></pre>
          </li>
          <li>
            Sự khác nhau giữa cài package global và local như sau: Global install thì bất cứ project nào trên máy cũng sử dụng được, ví dụ như live-server. Global install thì file trong project không thể truy cập nhưng dùng được
            tại CLI. Trong khi Local install thì ngược lại.
          </li>
          <li>
            Để cài version xác định nào đó của package thì ta thêm @version vào.
            Ví dụ:
            <pre>
              <code>npm i lodash@1.4.1</code>
            </pre>
          </li>
          <li>
            Một version của package được định dạng: a.b.c với a là major version
            (major changes, break the API), b là minor version (minor change,
            not break the API) còn c là patch (bug fixes)
          </li>
          <li>
            Để lưu được thông tin (tên, version) của các packages khi cài vào
            file package.json <b>(cực kỳ quan trọng)</b> thì thay vì các lệnh
            trên ta phải thêm vào --save Trong express mới bây giờ thì không cần
            thêm --save để lưu vào package.json nữa.
          </li>
          <li>
            Để uninstall package thì ta gõ:
            <pre>
              <code>npm uninstall tenpackage</code>
            </pre>
            hoặc
            <pre>
              <code>npm rm tenpackage</code>
            </pre>
            hoặc
            <pre>
              <code>npm remove tenpackage</code>
            </pre>
          </li>
        </ul>
        <h3>NPX</h3>
        <ul>
          <li>Ở phiên bản 5.2 thì npx đã được tích hợp sẵn với npm.</li>
          <li>Trong khi nhiệm vụ của NPM là quản lý các package thì NPX (NPM Package Executor) là thực thi các package.</li>
          <li>Để thực thi các package với NPM thì quy trình tương đối phức tạp, còn với NPX thì tương đối dễ dàng (thực thi những thư viện đã được cài đặt, chưa được cài đặt, chạy code trực tiếp từ github, kiểm tra version). Ví dụ gọi thư viện create-react-app để tạo một project my-app: npx create-react-app my-app</li>
        </ul>

      </div>


    </div>
  )
}

export default backend_tutorial

