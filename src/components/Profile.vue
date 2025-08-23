<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import CV from '../assets/CV_hjjung.pdf'

const { t } = useI18n()

const downloadCV = () => {
  try {
    const link = document.createElement('a')
    link.href = CV
    link.download = 'CV_hjjung.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  } catch (error) {
    alert('Download failed')
  }
}
</script>

<template>
  <section class="profile">
    <div class="container">
      <!-- Hero Section -->
      <div class="hero-section">
        <div class="profile-card">
          <div class="profile-header">
            <div class="profile-avatar">
              <div class="avatar-placeholder">HJ</div>
            </div>
            <div class="profile-info">
              <h1 class="profile-name">{{ t('hjjung') }}</h1>
              <p class="profile-title">Full Stack Developer</p>
            </div>
          </div>

          <div class="contact-info">
            <div class="contact-item">
              <div class="contact-icon">📧</div>
              <div class="contact-text">ggumihj@gmail.com</div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">📱</div>
              <div class="contact-text">+82 10-4529-2146</div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">🔗</div>
              <div class="contact-text">
                <a href="https://github.com/Noeul-J" target="_blank" class="contact-link">
                  github.com/Noeul-J
                </a>
              </div>
            </div>
          </div>

          <div class="action-section">
            <button class="download-btn" @click="downloadCV">
              <svg class="download-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              {{ t('downloadCV') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.profile {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.8) 50%, rgba(241, 245, 249, 0.9) 100%);
  color: #1e293b;
  min-height: 80vh;
  padding: 40px 0;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.profile::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 1;
}

/* Hero Section */
.hero-section {
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeInUp 1s ease-out;
  min-height: calc(100vh - 160px);
  padding: 20px 0;
}

.profile-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 24px;
  padding: 48px;
  max-width: 320px;
  width: 100%;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.profile-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

/* Profile Header */
.profile-header {
  margin-bottom: 32px;
}

.profile-avatar {
  margin-bottom: 24px;
}

.avatar-placeholder {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin: 0 auto;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
}

.profile-name {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 8px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.profile-title {
  font-size: 1.125rem;
  color: #475569;
  font-weight: 500;
}

/* Contact Info */
.contact-info {
  margin-bottom: 32px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  margin-bottom: 8px;
  transition: all 0.3s ease;
}

.contact-item:hover {
  background: rgba(255, 255, 255, 0.8);
  border-color: rgba(59, 130, 246, 0.3);
  transform: translateX(4px);
}

.contact-icon {
  font-size: 1.25rem;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-text {
  color: #64748b;
  font-size: 0.875rem;
}

.contact-link {
  color: #667eea;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: #764ba2;
}

/* Action Section */
.action-section {
  margin-top: 32px;
}

.download-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 16px 40px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.3);
  width: 100%;
  white-space: nowrap;
  text-align: center;
}

.download-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(102, 126, 234, 0.4);
}

.download-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.download-icon {
  width: 30px;
  height: 30px;
  transition: transform 0.3s ease;
}

.download-btn:hover .download-icon {
  transform: translateY(-2px);
}

.download-btn:disabled .download-icon {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


.profile-card {
  transform-origin: center center;
}


@media (max-width: 767px) {
  .profile {
    padding: 60px 0;
  }
  
  .container {
    padding: 0 16px;
  }
  
  .profile-card {
    transform: scale(1);
  }
}

@media (max-width: 480px) {
  .profile-card {
    transform: scale(0.9);
  }
}

@media (max-width: 360px) {
  .profile-card {
    transform: scale(0.8);
  }
} 
</style>

