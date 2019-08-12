$(document).ready(function () {

    $('.irp_province').on('change', function (e) {

        if ($(this).val() === 'آذربایجان شرقی') {
            $('.irp_city').empty().html(`
            <option value="تبریز">تبریز</option>
            <option value="مراغه">مراغه</option>
            <option value="مرند">مرند</option>
            <option value="اهر">اهر</option>
            <option value="میانه">میانه</option>
            <option value="بناب">بناب</option>
            <option value="سهند">سهند</option>
            <option value="سراب">سراب</option>
            <option value="آذرشهر">آذرشهر</option>
            <option value="هادی‌شهر">هادی‌شهر</option>
            <option value="عجب‌شیر">عجب‌شیر</option>
            <option value="سردرود">سردرود</option>
            <option value="ملکان">ملکان</option>
            <option value="شبستر">شبستر</option>
            <option value="خسروشاه">خسروشاه</option>
            <option value="بستان‌آباد">بستان‌آباد</option>
            <option value="هشترود">هشترود</option>         
            `)
        } else if ($(this).val() === 'آذربایجان غربی') {
            $('.irp_city').empty().html(`
            <option value="ارومیه">ارومیه</option>
            <option value="خوی">خوی</option>
            <option value="بوکان">بوکان</option>
            <option value="مهاباد">مهاباد</option>
            <option value="میاندوآب">میاندوآب</option>
            <option value="سلماس">سلماس</option>
            <option value="پیرانشهر">پیرانشهر</option>
            <option value="نقده">نقده</option>
            <option value="تکاب">تکاب</option>
            <option value="ماکو">ماکو</option>
            <option value="سردشت">سردشت</option>
            <option value="شاهین‌دژ">شاهین‌دژ</option>
            <option value="اشنویه">اشنویه</option>
            <option value="قره‌ضیاءالدین">قره‌ضیاءالدین</option>
            <option value="شوط">شوط</option>                                
            `)
        } else if ($(this).val() === 'اردبیل') {
            $('.irp_city').empty().html(`
            <option value="اردبیل">اردبیل</option>
            <option value="پارس‌آباد">پارس‌آباد</option>
            <option value="مشگین‌شهر">مشگین‌شهر</option>
            <option value="خلخال">خلخال</option>
            <option value="گرمی">گرمی</option>                           
            `)
        } else if ($(this).val() === 'اصفهان') {
            $('.irp_city').empty().html(`
            <option value="اصفهان">اصفهان</option>
            <option value="کاشان">کاشان</option>
            <option value="خمینی‌شهر">خمینی‌شهر</option>
            <option value="نجف‌آباد">نجف‌آباد</option>
            <option value="شاهین‌شهر">شاهین‌شهر</option>
            <option value="شهرضا">شهرضا</option>
            <option value="فولادشهر">فولادشهر</option>
            <option value="بهارستان">بهارستان</option>
            <option value="مبارکه">مبارکه</option>
            <option value="آران و بیدگل">آران و بیدگل</option>
            <option value="گلپایگان">گلپایگان</option>
            <option value="زرین‌شهر">زرین‌شهر</option>
            <option value="درچه">درچه</option>
            <option value="دولت‌آباد">دولت‌آباد</option>
            <option value="فلاورجان">فلاورجان</option>
            <option value="قهدریجان">قهدریجان</option>
            <option value="خورزوق">خورزوق</option>
            <option value="نائین">نائین</option>
            <option value="سمیرم">سمیرم</option>
            <option value="کلیشاد و سودرجان">کلیشاد و سودرجان</option>
            <option value="گل‌دشت">گل‌دشت</option>
            <option value="گزبرخوار">گزبرخوار</option>
            <option value="ابریشم">ابریشم</option>
            <option value="خوانسار">خوانسار</option>
            <option value="تیران">تیران</option>
            <option value="داران">داران</option>
            `)
        } else if ($(this).val() === 'البرز') {
            $('.irp_city').empty().html(`
            <option value="کرج">کرج</option>
            <option value="فردیس">فردیس</option>
            <option value="کمال‌شهر">کمال‌شهر</option>
            <option value="نظرآباد">نظرآباد</option>
            <option value="محمدشهر">محمدشهر</option>
            <option value="ماهدشت">ماهدشت</option>
            <option value="مشکین دشت">مشکین دشت</option>
            <option value="هشتگرد">هشتگرد</option>
            <option value="چهارباغ">چهارباغ</option>
            <option value="شهر جدید هشتگرد">شهر جدید هشتگرد</option>
            <option value="اشتهارد">اشتهارد</option>
            <option value="گرمدره">گرمدره</option>
            `)
        } else if ($(this).val() === 'ایلام') {
            $('.irp_city').empty().html(`
            <option value="ایلام">ایلام</option>
            <option value="دهلران">دهلران</option>
            <option value="ایوان">ایوان</option>
            <option value="آبدانان">آبدانان</option>
            <option value="دره‌شهر">دره‌شهر</option>
            `)
        } else if ($(this).val() === 'بوشهر') {
            $('.irp_city').empty().html(`
            <option value="بوشهر">بوشهر</option>
            <option value="برازجان">برازجان</option>
            <option value="بندر گناوه">بندر گناوه</option>
            <option value="بندر کنگان">بندر کنگان</option>
            <option value="خورموج">خورموج</option>
            <option value="جم">جم</option>
            <option value="بندر دیلم">بندر دیلم</option>
            <option value="بندر دیر">بندر دیر</option>
            <option value="عالی‌شهر">عالی‌شهر</option>
            `)
        } else if ($(this).val() === 'تهران') {
            $('.irp_city').empty().html(`
            <option value="تهران">تهران</option>
            <option value="اسلام‌شهر">اسلام‌شهر</option>
            <option value="شهریار">شهریار</option>
            <option value="قدس">قدس</option>
            <option value="ملارد">ملارد</option>
            <option value="گلستان">گلستان</option>
            <option value="پاکدشت">پاکدشت</option>
            <option value="قرچک">قرچک</option>
            <option value="ورامین">ورامین</option>
            <option value="نسیم‌شهر">نسیم‌شهر</option>
            <option value="اندیشه">اندیشه</option>
            <option value="رباط کریم">رباط کریم</option>
            <option value="پرند">پرند</option>
            <option value="باغستان">باغستان</option>
            <option value="بومهن">بومهن</option>
            <option value="پردیس">پردیس</option>
            <option value="باقرشهر">باقرشهر</option>
            <option value="پیشوا">پیشوا</option>
            <option value="صالحیه">صالحیه</option>
            <option value="صباشهر">صباشهر</option>
            <option value="چهاردانگه">چهاردانگه</option>
            <option value="دماوند">دماوند</option>
            <option value="حسن‌آباد">حسن‌آباد</option>
            <option value="کهریزک">کهریزک</option>
            <option value="فردوسیه">فردوسیه</option>
            <option value="وحیدیه">وحیدیه</option>
            <option value="صفادشت">صفادشت</option>
            <option value="نصیرشهر">نصیرشهر</option>
            <option value="رودهن">رودهن</option>
            <option value="شاهدشهر">شاهدشهر</option>
            <option value="فرون‌آباد">فرون‌آباد</option>
            `)
        } else if ($(this).val() === 'چهارمحال و بختیاری') {
            $('.irp_city').empty().html(`
            <option value="شهرکرد">شهرکرد</option>
            <option value="بروجن">بروجن</option>
            <option value="لردگان">لردگان</option>
            <option value="فرخ‌شهر">فرخ‌شهر</option>
            <option value="فارسان">فارسان</option>
            <option value="هفشجان">هفشجان</option>
            `)
        } else if ($(this).val() === 'خراسان جنوبی') {
            $('.irp_city').empty().html(`
            <option value="بیرجند">بیرجند</option>
            <option value="قائن">قائن</option>
            <option value="طبس">طبس</option>
            <option value="فردوس">فردوس</option>
            `)
        } else if ($(this).val() === 'خراسان رضوی') {
            $('.irp_city').empty().html(`
            <option value="مشهد">مشهد</option>
            <option value="نیشابور">نیشابور</option>
            <option value="سبزوار">سبزوار</option>
            <option value="تربت حیدریه">تربت حیدریه</option>
            <option value="کاشمر">کاشمر</option>
            <option value="قوچان">قوچان</option>
            <option value="تربت جام">تربت جام</option>
            <option value="تایباد">تایباد</option>
            <option value="چناران">چناران</option>
            <option value="سرخس">سرخس</option>
            <option value="گناباد">گناباد</option>
            <option value="فریمان">فریمان</option>
            <option value="گلبهار">گلبهار</option>
            <option value="درگز">درگز</option>
            <option value="خواف">خواف</option>
            <option value="بردسکن">بردسکن</option>
            <option value="طرقبه">طرقبه</option>
            `)
        } else if ($(this).val() === 'خراسان شمالی') {
            $('.irp_city').empty().html(`
            <option value="بجنورد">بجنورد</option>
            <option value="شیروان">شیروان</option>
            <option value="اسفراین">اسفراین</option>
            <option value="آشخانه">آشخانه</option>
            `)
        } else if ($(this).val() === 'خوزستان') {
            $('.irp_city').empty().html(`
            <option value="اهواز">اهواز</option>
            <option value="دزفول">دزفول</option>
            <option value="آبادان">آبادان</option>
            <option value="بندر ماهشهر">بندر ماهشهر</option>
            <option value="اندیمشک">اندیمشک</option>
            <option value="خرمشهر">خرمشهر</option>
            <option value="بهبهان">بهبهان</option>
            <option value="ایذه">ایذه</option>
            <option value="شوشتر">شوشتر</option>
            <option value="مسجد سلیمان">مسجد سلیمان</option>
            <option value="بندر امام خمینی">بندر امام خمینی</option>
            <option value="شوش">شوش</option>
            <option value="رامهرمز">رامهرمز</option>
            <option value="امیدیه">امیدیه</option>
            <option value="کوت عبدالله">کوت عبدالله</option>
            <option value="سوسنگرد">سوسنگرد</option>
            <option value="شادگان">شادگان</option>
            <option value="شیبان">شیبان</option>
            <option value="چمران">چمران</option>
            <option value="هندیجان">هندیجان</option>
            <option value="باغ‌ملک">باغ‌ملک</option>
            <option value="رامشیر">رامشیر</option>
            <option value="گتوند">گتوند</option>
            <option value="حمیدیه">حمیدیه</option>
            `)
        } else if ($(this).val() === 'زنجان') {
            $('.irp_city').empty().html(`
            <option value="زنجان">زنجان</option>
            <option value="ابهر">ابهر</option>
            <option value="خرمدره">خرمدره</option>
            <option value="قیدار">قیدار</option>
            `)
        } else if ($(this).val() === 'سمنان') {
            $('.irp_city').empty().html(`
            <option value="سمنان">سمنان</option>
            <option value="شاهرود">شاهرود</option>
            <option value="دامغان">دامغان</option>
            <option value="گرمسار">گرمسار</option>
            <option value="مهدی‌شهر">مهدی‌شهر</option>      
            `)
        } else if ($(this).val() === 'سیستان و بلوچستان') {
            $('.irp_city').empty().html(`
            <option value="زاهدان">زاهدان</option>
            <option value="زابل">زابل</option>
            <option value="ایرانشهر">ایرانشهر</option>
            <option value="چابهار">چابهار</option>
            <option value="سراوان">سراوان</option>
            <option value="خاش">خاش</option>
            <option value="کنارک">کنارک</option>
            `)
        } else if ($(this).val() === 'فارس') {
            $('.irp_city').empty().html(`
            <option value="شیراز">شیراز</option>
            <option value="مرودشت">مرودشت</option>
            <option value="جهرم">جهرم</option>
            <option value="فسا">فسا</option>
            <option value="کازرون">کازرون</option>
            <option value="شهرصدرا">شهرصدرا</option>
            <option value="داراب">داراب</option>
            <option value="فیروزآباد">فیروزآباد</option>
            <option value="لار">لار</option>
            <option value="آباده">آباده</option>
            <option value="نورآباد">نورآباد</option>
            <option value="نی‌ریز">نی‌ریز</option>
            <option value="اقلید">اقلید</option>
            <option value="استهبان">استهبان</option>
            <option value="گراش">گراش</option>
            <option value="زرقان">زرقان</option>
            <option value="کوار">کوار</option>
            <option value="لامرد">لامرد</option>
            <option value="صفاشهر">صفاشهر</option>
            <option value="قائمیه">قائمیه</option>
            <option value="حاجی‌آباد">حاجی‌آباد</option>
            <option value="فراشبند">فراشبند</option>
            <option value="قیر">قیر</option>
            `)
        } else if ($(this).val() === 'قزوین') {
            $('.irp_city').empty().html(`
            <option value="قزوین">قزوین</option>
            <option value="الوند">الوند</option>
            <option value="محمدیه">محمدیه</option>
            <option value="تاکستان">تاکستان</option>
            <option value="آبیک">آبیک</option>
            <option value="اقبالیه">اقبالیه</option>
            <option value="محمودآباد نمونه">محمودآباد نمونه</option>
            <option value="بوئین‌زهرا">بوئین‌زهرا</option>
            <option value="شریفیه">شریفیه</option>
            `)
        } else if ($(this).val() === 'قم') {
            $('.irp_city').empty().html(`
            <option value="قم">قم</option>
            `)
        } else if ($(this).val() === 'کردستان') {
            $('.irp_city').empty().html(`
            <option value="سنندج">سنندج</option>
            <option value="سقز">سقز</option>
            <option value="مریوان">مریوان</option>
            <option value="بانه">بانه</option>
            <option value="قروه">قروه</option>
            <option value="کامیاران">کامیاران</option>
            <option value="بیجار">بیجار</option>
            <option value="دیواندره">دیواندره</option>
            <option value="دهگلان">دهگلان</option>
            `)
        } else if ($(this).val() === 'کرمان') {
            $('.irp_city').empty().html(`
            <option value="کرمان">کرمان</option>
            <option value="سیرجان">سیرجان</option>
            <option value="رفسنجان">رفسنجان</option>
            <option value="جیرفت">جیرفت</option>
            <option value="بم">بم</option>
            <option value="زرند">زرند</option>
            <option value="کهنوج">کهنوج</option>
            <option value="شهر بابک">شهر بابک</option>
            <option value="بافت">بافت</option>
            <option value="بردسیر">بردسیر</option>
            <option value="بروات">بروات</option>
            <option value="راور">راور</option>
            <option value="محمدآباد">محمدآباد</option>
            <option value="نجف‌شهر">نجف‌شهر</option>
            `)
        } else if ($(this).val() === 'کرمانشاه') {
            $('.irp_city').empty().html(`
            <option value="کرمانشاه">کرمانشاه</option>
            <option value="اسلام‌آباد غرب">اسلام‌آباد غرب</option>
            <option value="جوانرود">جوانرود</option>
            <option value="کنگاور">کنگاور</option>
            <option value="سرپل ذهاب">سرپل ذهاب</option>
            <option value="سنقر">سنقر</option>
            <option value="هرسین">هرسین</option>
            <option value="صحنه">صحنه</option>
            <option value="پاوه">پاوه</option>
            <option value="روانسر">روانسر</option>
            <option value="گیلانغرب">گیلانغرب</option>
            `)
        } else if ($(this).val() === 'کهگیلویه و بویراحمد') {
            $('.irp_city').empty().html(`
            <option value="یاسوج">یاسوج</option>
            <option value="دوگنبدان">دوگنبدان</option>
            <option value="دهدشت">دهدشت</option>
            `)
        } else if ($(this).val() === 'گلستان') {
            $('.irp_city').empty().html(`
            <option value="گرگان">گرگان</option>
            <option value="گنبد کاووس">گنبد کاووس</option>
            <option value="بندر ترکمن">بندر ترکمن</option>
            <option value="علی‌آباد کتول">علی‌آباد کتول</option>
            <option value="آزادشهر">آزادشهر</option>
            <option value="کردکوی">کردکوی</option>
            <option value="کلاله">کلاله</option>
            <option value="آق‌قلا">آق‌قلا</option>
            <option value="مینودشت">مینودشت</option>
            <option value="گالیکش">گالیکش</option>
            <option value="بندر گز">بندر گز</option>
            `)
        } else if ($(this).val() === 'گیلان') {
            $('.irp_city').empty().html(`
            <option value="رشت">رشت</option>
            <option value="بندرانزلی">بندرانزلی</option>
            <option value="لاهیجان">لاهیجان</option>
            <option value="لنگرود">لنگرود</option>
            <option value="هشتپر">هشتپر</option>
            <option value="آستارا">آستارا</option>
            <option value="صومعه‌سرا">صومعه‌سرا</option>
            <option value="آستانه اشرفیه">آستانه اشرفیه</option>
            <option value="رودسر">رودسر</option>
            <option value="فومن">فومن</option>
            <option value="خمام">خمام</option> 
            `)
        } else if ($(this).val() === 'لرستان') {
            $('.irp_city').empty().html(`
            <option value="خرم‌آباد">خرم‌آباد</option>
            <option value="بروجرد">بروجرد</option>
            <option value="دورود">دورود</option>
            <option value="الیگودرز">الیگودرز</option>
            <option value="کوهدشت">کوهدشت</option>
            <option value="نورآباد">نورآباد</option>
            <option value="ازنا">ازنا</option>
            <option value="الشتر">الشتر</option>
            <option value="پلدختر">پلدختر</option>
            `)
        } else if ($(this).val() === 'مازندران') {
            $('.irp_city').empty().html(`
            <option value="ساری">ساری</option>
            <option value="بابل">بابل</option>
            <option value="آمل">آمل</option>
            <option value="قائم‌شهر">قائم‌شهر</option>
            <option value="بهشهر">بهشهر</option>
            <option value="چالوس">چالوس</option>
            <option value="نکا">نکا</option>
            <option value="بابلسر">بابلسر</option>
            <option value="تنکابن">تنکابن</option>
            <option value="نوشهر">نوشهر</option>
            <option value="فریدونکنار">فریدونکنار</option>
            <option value="رامسر">رامسر</option>
            <option value="جویبار">جویبار</option>
            <option value="محمودآباد">محمودآباد</option>
            <option value="امیرکلا">امیرکلا</option>
            <option value="نور">نور</option>
            <option value="گلوگاه">گلوگاه</option>
            <option value="کتالم و سادات‌شهر">کتالم و سادات‌شهر</option>    
            `)
        } else if ($(this).val() === 'مرکزی') {
            $('.irp_city').empty().html(`
            <option value="اراک">اراک</option>
            <option value="ساوه">ساوه</option>
            <option value="خمین">خمین</option>
            <option value="محلات">محلات</option>
            <option value="دلیجان">دلیجان</option>
            <option value="مأمونیه">مأمونیه</option>
            <option value="شازند">شازند</option>
            <option value="مهاجران">مهاجران</option>
            `)
        } else if ($(this).val() === 'هرمزگان') {
            $('.irp_city').empty().html(`
            <option value="بندرعباس">بندرعباس</option>
            <option value="میناب">میناب</option>
            <option value="قشم">قشم</option>
            <option value="کیش">کیش</option>
            <option value="دهبارز">دهبارز</option>
            <option value="بندرلنگه">بندرلنگه</option>
            <option value="حاجی‌آباد">حاجی‌آباد</option> 
            `)
        } else if ($(this).val() === 'همدان') {
            $('.irp_city').empty().html(`
            <option value="همدان">همدان</option>
            <option value="ملایر">ملایر</option></option>
            <option value="نهاوند">نهاوند</option>
            <option value="اسدآباد">اسدآباد</option>
            <option value="تویسرکان">تویسرکان</option>
            <option value="بهار">بهار</option>
            <option value="کبودرآهنگ">کبودرآهنگ</option>
            `)
        } else if ($(this).val() === 'یزد') {
            $('.irp_city').empty().html(`
            <option value="یزد">یزد</option>
            <option value="میبد">میبد</option>
            <option value="اردکان">اردکان</option>
            <option value="حمیدیا">حمیدیا</option>
            <option value="بافق">بافق</option>
            <option value="مهریز">مهریز</option>
            <option value="ابرکوه">ابرکوه</option>   
            `)
        }


    });

});