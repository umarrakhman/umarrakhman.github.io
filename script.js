// efek slow sekrol
$('.sekrol').on('click', function(){
	var tujuan = $(this).attr('href');
	var elemenTujuan = $(tujuan);

	$('html').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 800);
});
// akhir efek slow sekrol

// efek animasi loading
$(window).on('load', function() {
	$('.isiTentang').addClass('isiMuncul');
	$('.pemilik').addClass('isiMuncul');
	$('.quotes').addClass('isiMuncul');
	$('img').addClass('isiMuncul');
});
// akhir efek animasi loading

// efek animasi muncul pada saat sekrol
$(window).scroll(function(){
	var cobaSekrol = $(this).scrollTop();

	if(cobaSekrol > $('.tugas').offset().top - 250 ) {
		$('.p0Semua').each(function(i) {
			setTimeout(function() {
				$('.p0Semua').eq(i).addClass('muncul');
			}, 300 * (i+1));
		});
	}

	if( cobaSekrol > $('.kontak').offset().top - 250) {
		$('.sosmed').each(function(i) {
			setTimeout(function() {
				$('.sosmed').eq(i).addClass('sMuncul');
			}, 300 * (i+1));
		});
	}
});
// akhir efek animasi muncul pada saat sekrol