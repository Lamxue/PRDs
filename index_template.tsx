import React from 'react'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import ScrollComponent from '@/components/ScrollComponent'
import TwoColumnWithIcon from '@/CommonLayout/TwoColumnWithIcon'
import FAQList from '@/CommonLayout/FAQList'
import Head from 'next/head'

import Image from 'next/image'

const Index = () => {
	const { t } = useTranslation('affiliates')

	const renderSEO = () => {
		return (
			<Head>
				<title>{t('SEO-title')}</title>
				<meta name="description" content={t('SEO-description')} />
				<meta name="keywords" content={t('SEO-keywords')} />
				<meta property="og:title" content={t('SEO-title')} />
				<meta property="og:description" content={t('SEO-description')} />
				<meta property="og:type" content={t('SEO-keywords')} />
			</Head>
		)
	}
	const renderBanner = () => {
		return (
			<section className="relative w-screen h-[600px] banner-bg-grey1">
				<div className="w-screen flex flex-col items-center px-[20px] xxsm:px-[60px]  h-[600px] bg-center bg-cover bg-[url('https://cdn.udelivrs.com/2025/07/137c07f943ffd7ff9eacc8bd1ec1af3a_1751961199696.png')]">
					<h1 className="mt-[160px] text-[36px] xsm:text-[52px] text-center font-extra-bold font-Satoshi-Black text-[#ffffff]">{t('BannerTitle1')}</h1>
					<p className="mt-[16px] text-[18px] xsm:text-[36px] text-center font-normal font-Satoshi-Regular text-[#ffffff]">{t('BannerDescription1')}</p>
					<div className="mt-[48px] flex flex-col xxsm:flex-row items-center gap-[16px]  w-full justify-center">
						<a
							className="btn-lg btn-red font-Satoshi-Bold flex items-center justify-center px-[2px] xsm:px-[24px] w-[100%] xxsm:w-[176px] h-[48px]"
							href="http://app.impact.com/campaign-campaign-info-v2/SurferCloud.brand"
							target="_blank"
						>
							<Image src="https://cdn.udelivrs.com/2025/07/b7fbd6b5d65d62fdb2537e01f3663e12_1752042182281.png" width={27} height={27} alt="money" />
							<span className="ml-[6px] xsm:ml-[12px]">{t('ApplyButton')}</span>
						</a>
						<a
							className="btn-lg btn-white font-Satoshi-Bold  px-[2px] xsm:px-[24px] h-[48px] flex items-center justify-center  w-[100%] xxsm:w-[198px]"
							href="https://www.surfercloud.com/blog/surfercloud-affiliate-program-onboarding-guide-via-impact"
							target="_blank"
						>
							<span className="">{t('StepByStepGuide')}</span>
						</a>
					</div>
				</div>
			</section>
		)
	}

	const renderAdvantage = () => {
		const advantage_data = [
			{
				iconImage: 'https://cdn.udelivrs.com/2025/07/c7d7b3192e7de32fdc6b454da4f389c1_1751968528721.png',
				iconImageWidth: 48,
				iconImageHeight: 48,
				title: t('AdvantageTitle1'),
				description: t('AdvantageDescription1'),
			},
			{
				iconImage: 'https://cdn.udelivrs.com/2025/07/0a5cb6185ac2493c7c17ff791186c9c7_1751968588435.png',
				iconImageWidth: 48,
				iconImageHeight: 48,
				title: t('AdvantageTitle2'),
				description: t('AdvantageDescription2'),
			},
			{
				iconImage: 'https://cdn.udelivrs.com/2025/07/ff67172292249d4dbfb6372fd49782cc_1751968769334.png',
				iconImageWidth: 48,
				iconImageHeight: 48,
				title: t('AdvantageTitle3'),
				description: t('AdvantageDescription3'),
			},
			{
				iconImage: 'https://cdn.udelivrs.com/2025/07/4c0883740b96d30623588b971b753959_1751969108966.png',
				iconImageWidth: 48,
				iconImageHeight: 48,
				title: t('AdvantageTitle4'),
				description: t('AdvantageDescription4'),
			},
			{
				iconImage: 'https://cdn.udelivrs.com/2025/07/a22e41d68eb6d74ef340792705611d60_1751969302071.png',
				iconImageWidth: 48,
				iconImageHeight: 48,
				title: t('AdvantageTitle5'),
				description: t('AdvantageDescription5'),
			},
			{
				iconImage: 'https://cdn.udelivrs.com/2025/07/46857a9667ca219e63871df5e6a0ce24_1751969472917.png',
				iconImageWidth: 48,
				iconImageHeight: 48,
				title: t('AdvantageTitle6'),
				description: t('AdvantageDescription6'),
			},
		]
		return (
			<section className="content-container">
				<ScrollComponent>
					<h2 className="mt-[80px] mb-[48px]  text-[36px] text-center leading-[72px] xxsm:text-[48px]">{t('AdvantageTitle')}</h2>
					<TwoColumnWithIcon data={advantage_data} />
				</ScrollComponent>
			</section>
		)
	}

	const renderWho = () => {
		const who_data = [
			{
				avatar: 'https://cdn.udelivrs.com/2025/07/0c4694c878f5051959678164ea15894f_1752029871013.png',
				description: t('WhoDescription1'),
			},
			{
				avatar: 'https://cdn.udelivrs.com/2025/07/f7cb27e18226aae64ab3abc52c0c36f3_1752030065049.png',
				description: t('WhoDescription2'),
			},
			{
				avatar: 'https://cdn.udelivrs.com/2025/07/1283366e71c41379443eecbad7d60a50_1752030075428.png',
				description: t('WhoDescription3'),
			},
			{
				avatar: 'https://cdn.udelivrs.com/2025/07/d094397ac3e9ba94eb6b73b616e6dce3_1752030086258.png',
				description: t('WhoDescription4'),
			},
		]
		return (
			<section className="content-container bg-no-repeat bg-left-bottom bg-[length:169px_129px] bg-none sm:bg-[url('https://cdn.udelivrs.com/2025/07/8e05f112155cc9c62d3a1f9955c85fe6_1751970031852.png')]">
				<ScrollComponent>
					<div className="min-h-[400px] mb-[32px]">
						<h2 className="mt-[80px] mb-[48px]  text-[36px] text-center leading-[72px] xxsm:text-[48px]">{t('WhoTitle')}</h2>
						<div className="grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-4  gap-[16px]">
							{who_data.map((item, index) => (
								<div
									className="flex flex-col items-center gap-[16px] h-[256px] bg-[#ffffff] rounded-[16px] px-[16px] py-[32px] shadow-[0_0_0_1px_rgba(216,220,238,1),_0_8px_20px_0_rgba(23,25,49,0.08)]"
									key={index}
								>
									<Image src={item.avatar} width={80} height={80} alt="who" />
									<p className="text-[16px] font-Satoshi-Bold text-[#374567] text-center leading-[24px]">{item.description}</p>
								</div>
							))}
						</div>
					</div>
				</ScrollComponent>
			</section>
		)
	}

	const renderHowToJoin = () => {
		const JionStep = [
			{
				step: 'https://cdn.udelivrs.com/2025/07/cbeed21c0b63d5018ac54662c54b8b44_1752033274001.png',
				description: t('HowToJoinDescription1'),
			},
			{
				step: 'https://cdn.udelivrs.com/2025/07/ca379489f4b04f00f67c0b7ff4987aac_1752033284467.png',
				description: t('HowToJoinDescription2'),
			},
			{
				step: 'https://cdn.udelivrs.com/2025/07/65b31db8df07bdfb9fca52ad2d72c525_1752033300866.png',
				description: t('HowToJoinDescription3'),
			},
			{
				step: 'https://cdn.udelivrs.com/2025/07/31be5f126b03e953bf5b17d390ac8413_1752033315000.png',
				description: t('HowToJoinDescription4'),
			},
		]
		return (
			<section className="content-container">
				<ScrollComponent>
					<h2 className="mt-[80px] mb-[48px]  text-[36px] text-center leading-[72px] xxsm:text-[48px]">{t('HowToJoinTitle')}</h2>
					<div className="flex flex-col xsm:flex-row gap-[16px] items-center justify-center mb-[95px]">
						<div className="grid grid-cols-1 xsm:grid-cols-2 w-full xsm:max-w-[716px] gap-[16px]">
							{JionStep.map((item, index) => (
								<div
									className="flex items-center justify-start gap-[16px] w-full xsm:max-w-[350px] px-[32px] h-[150px] bg-[#ffffff] rounded-[16px] shadow-[0_0_0_1px_rgba(216,220,238,1),_0_8px_20px_0_rgba(23,25,49,0.08)]"
									key={index}
								>
									<Image src={item.step} width={46} height={52} alt="how" />
									<p className="text-[18px] font-Satoshi-Bold text-[#374567] text-left leading-[24px]">{item.description}</p>
								</div>
							))}
						</div>
						<div className="bg-blue-linear-gradient rounded-[16px] w-full h-[272px] xsm:h-[316px] xsm:w-[350px] shadow-[0_4px_10px_-2px_rgba(8,136,255,0.24)]">
							<div className='p-[32px] flex flex-col items-center justify-between h-full bg-[url("https://cdn.udelivrs.com/2025/07/57e055913aa18c203deab98a81fc54d7_1752041484241.png")] bg-no-repeat bg-right-bottom bg-[length:138px_200px]'>
								<h3 className="text-[24px] font-Satoshi-Black font-extra-bold text-[#ffffff] text-left leading-[32px]">{t('HowToJoinTitle2')}</h3>
								<div className="flex flex-col items-center justify-center gap-[16px] w-full">
									<a
										className="btn-lg btn-red font-Satoshi-Bold flex items-center justify-center px-[24px] w-[100%] h-[48px]"
										href="http://app.impact.com/campaign-campaign-info-v2/SurferCloud.brand"
										target="_blank"
									>
										<Image src="https://cdn.udelivrs.com/2025/07/b7fbd6b5d65d62fdb2537e01f3663e12_1752042182281.png" width={27} height={27} alt="money" />
										<span className="ml-[6px] text-[16px] font-Satoshi-Bold xsm:ml-[12px]">{t('ApplyButton')}</span>
									</a>
									<a
										className="btn-lg btn-white px-[24px] h-[48px] flex items-center justify-center  w-[100%]"
										href="https://www.surfercloud.com/blog/surfercloud-affiliate-program-onboarding-guide-via-impact"
										target="_blank"
									>
										<span className="text-[16px] font-Satoshi-Bold">{t('StepByStepGuide')}</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</ScrollComponent>
			</section>
		)
	}
	const renderFAQ = () => {
		const list: { title: string; description: string }[] = []
		const faqData = Array.from({ length: 4 }, (_, i) => ({
			title: t(`FAQs_${i}_title`),
			description: t(`FAQs_${i}_des`),
		}))

		list.push(...faqData)
		return (
			<section className="content-container mb-[100px]">
				<ScrollComponent>
					<h2 className="mb-[48px]  text-[36px] leading-[72px] xxsm:text-[48px] text-center">{t('FAQS')}</h2>
					<FAQList data={list} />
				</ScrollComponent>
			</section>
		)
	}
	return (
		<main className="flex min-h-screen flex-col items-center justify-start bg-white overflow-hidden">
			{renderSEO()}
			{renderBanner()}
			{renderAdvantage()}
			{renderWho()}
			{renderHowToJoin()}
			{renderFAQ()}
		</main>
	)
}

export const getStaticProps = async ({ locale }: any) => ({
	props: {
		...(await serverSideTranslations(locale, ['common', 'header', 'footer', 'affiliates'])),
	},
})

export default Index
