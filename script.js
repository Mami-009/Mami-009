function showResults() {
        const checkboxes = document.querySelectorAll('.search-bar input[type="checkbox"]:checked');
        const resultsContainer = document.querySelector('.search-results');
        resultsContainer.innerHTML = ''; // 既存の結果をクリア

        if (checkboxes.length === 0) {
            resultsContainer.innerHTML = '<p>検索結果がありません。</p>';
            return;
        }

        let results = '<ol>'; // 数字付きリストを開始
        checkboxes.forEach((checkbox, index) => {
            results += `<li>${checkbox.value}に関連する求人情報</li>`;
        });
        results += '</ol>'; // リストを終了

        resultsContainer.innerHTML = results;
}
